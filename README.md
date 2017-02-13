# TuneHub

[TuneHub.online][tunehub] is a web application for users to stream music and follow artists. Inspired by Bandcamp, TuneHub allows users to browse artist pages, listen to their tracks, follow those artists, and discover other artists.

TuneHub is a personal project by Nathan Johnson.

![TuneHub home page: http://www.tunehub.online][home_page]

## Features

### User accounts with secure authentication
Users can quickly sign up and be assured that their password is encrypted (hashed through BCrypt). Prospective users can demo the site using the a guest user profile with pre-seeded artists. Login is required to access site features.

![TuneHub login page: http://www.tunehub.online/login][login_page]

### Music streaming with controls and no interruption
Users can stream music in real time and control volume through a handy play bar locked to the bottom of the screen.

### Artist pages
Each artist has its own page for viewing a sample album, cover, followers, and genre.

![Artist Page: http://www.tunehub.online/artist/][artist_page]

### Searching for artists
A search bar on the main page allows for quick lookup of your favorite artists.

### Artist follows allowing users to consolidate music
Fans can follow artists of their choice, consolidating them in a group on the fan's page.


![Fan page: http://www.tunehub.online/artist/][fan_page]

## Project Design

TuneHub was designed and built in a week and a half.

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

A [database schema][schema] was prepared alongside the design proposal.

## Technology

TuneHub is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

- [Backend technology][backend]
- [Frontend technology][frontend]
- [File storage][file storage] via Amazon Cloudinary

### User authentication

* User authentication based on hashed password (BCrypt) for high level database security.
* Unique session token (SecureRandom) for each user during each session protects user's data, so no one has access to anyone's notes but their own

```ruby
  # User model

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= reset_session_token
  end
```

### Seeding

This vast collection of artists and tracks was taken straight from Spotify by use of the RSpotify gem. I created a list of about 500 artists' names, and used RSpotify's Artist method to select the first search result for each artist name and populate data for sample album, sample tracks, artwork, name, and genres.

```ruby
@list.each do |artist|
  begin
    artists = RSpotify::Artist.search(artist)
    artist = artists.first
    name = artist.name
    genres = artist.genres.join(" ")
    sample_album = artist.albums.first
    sample_image = sample_album.images.first["url"]
    tracks = sample_album.tracks

    sample_artist = User.create(name: name, description: genres, user_type: "artist",
                                username: artist.name, password: 123456, image_url: sample_image)

    tracks.each do |track|
      preview_url = track.preview_url
      Track.create(track_url: preview_url, name: track.name, artist_id: sample_artist.id)
    end

  rescue
    next
  end
end
```


## Future Implementations

The features that will be added are listed in the [future implementations][future] outline.

[tunehub]: http://www.tunehub.online/
[login_page]: ./docs/images/login_page.png "Login Page"
[home_page]: ./docs/images/main_page.png "Home page"
[artist_page]: ./docs/images/artist_page.png "An Artist's page"
[fan_page]: ./docs/images/fan_page.png "Fan page"
[proposal]: ./docs/proposal.md
[schema]: ./docs/schema.md
[backend]: ./docs/backend.md
[frontend]: ./docs/frontend.md
[file_storage]: ./docs/file_storage.md
[future]: ./docs/future.md

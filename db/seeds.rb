# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative '1000_artists'

# a = User.create(username: 'guest', password: 123456)
# Track.create(name: "Work", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/4f6c0c8be9f6ccd01a2dd0439897503b56e4c777")
# Track.create(name: "A-Yo", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/380f0412c30a0c7abd92c8ee4ebdbea74946be05")
# Track.create(name: "In Common", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/d262bf3e9e0a16dad3e1d223871033a7d70267ae")
# Track.create(name: "We Are Never Ever Getting Back Together", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/fbf998b44136c3dcf90d412cf1cb27c3b8623735?cid=null")
# Track.create(name: "Not a Bad Thing", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/6b17b9987d6e5c2eaafb55ff2fe555294722dd2e")
# Track.create(name: "XO", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/df9b5efc4577e9ef65491b5a3f74f3cf428297d3")

RSpotify.authenticate("75f8328ee2214a4287387b52816dbc7f", "f12988fbf16246d693e462d6230abd3c")

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

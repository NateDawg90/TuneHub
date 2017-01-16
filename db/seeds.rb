# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative '1000_artists'

a = User.create(username: 'guest', password: 123456)
Track.create(name: "Work", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/4f6c0c8be9f6ccd01a2dd0439897503b56e4c777")
Track.create(name: "A-Yo", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/380f0412c30a0c7abd92c8ee4ebdbea74946be05")
Track.create(name: "In Common", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/d262bf3e9e0a16dad3e1d223871033a7d70267ae")
Track.create(name: "We Are Never Ever Getting Back Together", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/fbf998b44136c3dcf90d412cf1cb27c3b8623735?cid=null")
Track.create(name: "Not a Bad Thing", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/6b17b9987d6e5c2eaafb55ff2fe555294722dd2e")
Track.create(name: "XO", artist_id: a.id, track_url: "https://p.scdn.co/mp3-preview/df9b5efc4577e9ef65491b5a3f74f3cf428297d3")


@list.each do |artist|
  # debugger;
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

# User.create(name: "Metallica", description: "description", user_type: "artist",
#   username: "metallica", password: 123456, image_url: "ledzep.jpg")
# User.create(name: "Arctic Monkeys", description: "description", user_type: "artist",
#   username: "amonkeys", password: 123456, image_url: "ledzep.jpg")
# User.create(name: "Led Zeppelin", description: "description", user_type: "artist",
#   username: "ledzeppelin", password: 123456, image_url: "ledzep.jpg")
# User.create(name: "Pink Floyd", description: "description", user_type: "artist",
#   username: "pinkfloyd", password: 123456, image_url: "ledzep.jpg")
# User.create(name: "The Beatles", description: "description", user_type: "artist",
#   username: "thebeatles", password: 123456, image_url: "ledzep.jpg")
# User.create(name: "3", description: "description", user_type: "artist",
#   username: "threeband", password: 123456, image_url: "ledzep.jpg")
# User.create(name: "Beardfish", description: "description", user_type: "artist",
#   username: "beardfish", password: 123456, image_url: "tuning-fork.jpg")
# User.create(name: "Fiona Apple", description: "description", user_type: "artist",
#   username: "fionaapple", password: 123456, image_url: "tuning-fork.jpg")
# User.create(name: "Gov't Mule", description: "description", user_type: "artist",
#   username: "govtmule", password: 123456, image_url: "tuning-fork.jpg")
# User.create(name: "Mastodon", description: "description", user_type: "artist",
#   username: "mastodon", password: 123456, image_url: "tuning-fork.jpg")
# User.create(name: "Say Anything", description: "description", user_type: "artist",
#   username: "sayanything", password: 123456, image_url: "tuning-fork.jpg")


# ActiveRecord::Base.transaction do
#   User.destroy_all
#   Users = {
#     1: {
#       "name": "Metallica",
#       "id": 1,
#       "type": "artist",
#       "location": "San Francisco",
#       "description": "Heavy Metal band from the Bay Area"
#     },
#     2: {
#       "name": "Nathan Johnson",
#       id: 2,
#       "type": "fan",
#       "location": "San Francisco",
#     },
#     3: {
#       "name": "Arctic Monkeys",
#       id: 3,
#       "type": "artist",
#       "location": "London",
#       "description": "English Rock band from Sheffield"
#     }
#   }
#
#
# def generate_name
#   random_words = [
#     Faker::Team.creature.downcase,
#     Faker::Hacker.noun.downcase,
#     Faker::Hipster.word.downcase,
#     Faker::Space.moon.downcase,
#     Faker::Name.first_name.downcase,
#     Faker::Commerce.color
#   ].shuffle
#   song_name = []
#
#   rand(1..2).times { song_name << random_words.pop }
#
#   song_name.join(" ")
# end
#
# def generate_songs(amount)
#   songs = File.readlines(File.dirname(__FILE__) + '/songs.txt').map { |line| line.chomp }
#   songs.shuffle!
#   track_list = {}
#   random_songs = []
#
#   while random_songs.length < amount
#     random_songs.push(songs.pop)
#   end
#
#   while track_list.keys.length < amount
#     track_list[(amount - track_list.keys.length).to_s] = {
#       title: generate_name,
#       track_num: (amount - track_list.keys.length),
#       file: open(random_songs.pop)
#     }
#   end
#
#   track_list

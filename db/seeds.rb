# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
def generate_name
  random_words = [
    Faker::Team.creature.downcase,
    Faker::Hacker.noun.downcase,
    Faker::Hipster.word.downcase,
    Faker::Space.moon.downcase,
    Faker::Name.first_name.downcase,
    Faker::Commerce.color
  ].shuffle
  song_name = []

  rand(1..2).times { song_name << random_words.pop }

  song_name.join(" ")
end

def generate_songs(amount)
  songs = File.readlines(File.dirname(__FILE__) + '/songs.txt').map { |line| line.chomp }
  songs.shuffle!
  track_list = {}
  random_songs = []

  while random_songs.length < amount
    random_songs.push(songs.pop)
  end

  while track_list.keys.length < amount
    track_list[(amount - track_list.keys.length).to_s] = {
      title: generate_name,
      track_num: (amount - track_list.keys.length),
      file: open(random_songs.pop)
    }
  end

  track_list
end

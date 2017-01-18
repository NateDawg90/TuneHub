class Follow < ApplicationRecord
  validates :fan_id, :artist_id, presence: true
  validates_uniqueness_of :fan_id, scope: [:artist_id]

  has_one :followed_artist,
    foreign_key: :artist_id,
    class_name: 'User'

  has_one :follower,
    foreign_key: :fan_id,
    class_name: 'User'



end

class Follow < ApplicationRecord
  validates :fan_id, :artist_id, presence: true
  validates_uniqueness_of :fan_id, scope: [:artist_id]

  has_one :followed_artist,
    primary_key: :artist_id,
    foreign_key: :id,
    class_name: 'User'

end

# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  user_type       :string
#  name            :string
#  location        :string
#  description     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  image_url       :string
#

class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6  }, allow_nil: true

  has_many :tracks,
    foreign_key: :artist_id,
    class_name: 'Track'

  has_many :followed_artists,
    through: :follows,
    source: :followed_artist

  has_many :follows,
    foreign_key: :fan_id,
    class_name: 'Follow'

  has_many :artist_follows,
    foreign_key: :artist_id,
    class_name: 'Follow'

  has_many :followers,
    through: :artist_follows,
    source: :follower

  after_initialize :ensure_session_token


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

end

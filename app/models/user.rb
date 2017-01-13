# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  type            :string
#  name            :string
#  location        :string
#  description     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6  }, allow_nil: true

  has_many :tracks

  after_initialize :ensure_session_token

  def set_default_colors
    self.primary_color ||= "#ddd"
    self.secondary_color ||= "#ffffff"
    self.text_color ||= "#000000"
  end

  def set_band_name
    if self.type === "artist"
      self.name ||= "Band Name"
    end
  end

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
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= reset_session_token
  end

end

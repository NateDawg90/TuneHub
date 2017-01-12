class Track < ApplicationRecord
  validates :name, :artist_id, presence: true

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'User'

  before_save :extract_duration

  validates_attachment_content_type :file, content_type:
  [
    'audio/mpeg',
    'audio/x-mpeg',
    'audio/mp3',
    'audio/x-mp3',
    'audio/mpeg3',
    'audio/x-mpeg3',
    'audio/m4a',
    'audio/mpeg4',
    'audio/x-mpeg4',
    'audio/mpg',
    'audio/x-mpg',
    'audio/x-mpegaudio'
  ]

  def extract_duration
    if self.duration == nil
      path = file.queued_for_write[:original].path
      open_opts = { :encoding => 'utf-8' }
      Mp3Info.open(path, open_opts) do |mp3info|
        self.duration = mp3info.length.to_i
      end
    end
  end

end

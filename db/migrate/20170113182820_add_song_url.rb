class AddSongUrl < ActiveRecord::Migration[5.0]
  def change
    add_column :tracks, :track_url, :string
  end
end

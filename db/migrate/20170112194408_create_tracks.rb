class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :tracks, :artist_id
  end
end

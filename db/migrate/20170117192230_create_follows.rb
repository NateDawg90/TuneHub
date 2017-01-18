class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :fan_id, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :follows, :fan_id
    add_index :follows, :artist_id
  end
end

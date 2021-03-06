# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170117192230) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer  "fan_id",     null: false
    t.integer  "artist_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_follows_on_artist_id", using: :btree
    t.index ["fan_id"], name: "index_follows_on_fan_id", using: :btree
  end

  create_table "tracks", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "artist_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "track_url"
    t.index ["artist_id"], name: "index_tracks_on_artist_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "user_type"
    t.string   "name"
    t.string   "location"
    t.string   "description"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "image_url"
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end

# json.partial! 'api/users/user', user: @user
json.extract! @user, :id, :username, :name, :user_type, :description,
  :location, :tracks, :image_url

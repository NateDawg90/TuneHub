# json.partial! 'api/users/user', user: @user
json.extract! @user, :id, :name, :user_type, :description,
  :location, :image_url

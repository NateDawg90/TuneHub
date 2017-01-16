# json.partial! 'api/users/user', user: @user
json.extract! @user, :id, :name, :user_type, :description, :location, :tracks

json.image_url asset_path(@user.image_url)

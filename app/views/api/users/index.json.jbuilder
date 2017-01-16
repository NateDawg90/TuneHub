@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :name
  end
end

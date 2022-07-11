class UserSerializer
  include JSONAPI::Serializer
  attributes :name, :image, :bio, :house_id

  belongs_to :house
end

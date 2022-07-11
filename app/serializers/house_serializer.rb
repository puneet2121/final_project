class HouseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :address, :number_of_tenants, :image
end

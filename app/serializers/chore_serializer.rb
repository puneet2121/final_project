class ChoreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :chore_name, :status, :occurence, :is_assigned, :house_id

  belongs_to :house
end

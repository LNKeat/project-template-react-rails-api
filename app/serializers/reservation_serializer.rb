class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :camper_id, :campsite_id
  # has_one :camper
  # has_one :campsite
  
end

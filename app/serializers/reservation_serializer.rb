class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :campsite
  has_one :camper
  has_one :campsite

  
end

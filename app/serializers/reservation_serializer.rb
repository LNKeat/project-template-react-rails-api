class ReservationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :camper
  has_one :campsite
end

class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :camper_id, :campsite_id, :start_date, :end_date
  has_one :camper
  has_one :campsite
  
end

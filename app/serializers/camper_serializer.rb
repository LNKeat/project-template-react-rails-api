class CamperSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_admin
  has_many :reservations
end

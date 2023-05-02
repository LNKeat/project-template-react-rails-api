class CampsiteSerializer < ActiveModel::Serializer
  attributes :id, :site_number, :img_url, :description, :reservations
  has_many :reservations
end

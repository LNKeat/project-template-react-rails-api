class CampsiteSerializer < ActiveModel::Serializer
  attributes :id, :site_number, :img_url, :description
  has_many :reservations
end

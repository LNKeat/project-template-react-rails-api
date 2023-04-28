class CamperSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :is_admin
end

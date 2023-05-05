class CamperSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_admin, :password, :password_confirmation
end

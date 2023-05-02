class CamperUsernameSerializer < ActiveModel::Serializer
  attributes :username, :is_admin

  def username
    camper_username = ""
    campers = Camper.all
    campers.each { |camper| 
      camper_username = camper.username
  }
    camper_username
  end

  def is_admin
    camper_is_admin = false
    campers = Camper.all
    campers.each { |camper| 
      camper_is_admin = camper.is_admin
  }
    camper_is_admin
  end
end

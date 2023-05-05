class Camper < ApplicationRecord
    has_secure_password
    
    has_many :reservations
    has_many :campsites

    validates :username, presence: true
end

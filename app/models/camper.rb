class Camper < ApplicationRecord
    has_many :reservations
    has_many :campsites

    validates :username, presence: true
end

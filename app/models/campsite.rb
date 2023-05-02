class Campsite < ApplicationRecord
    has_many :reservations
    has_many :campers
end

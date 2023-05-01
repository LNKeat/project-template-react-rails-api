class Reservation < ApplicationRecord
  belongs_to :camper
  belongs_to :campsite
end

class Reservation < ApplicationRecord
  belongs_to :camper
  belongs_to :campsite

  validates :camper_id, presence: true
  validates :campsite_id, presence: true

end

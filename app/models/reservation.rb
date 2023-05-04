class Reservation < ApplicationRecord
  belongs_to :camper
  belongs_to :campsite

  validates :camper_id, presence: true
  validates :campsite_id, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true

  
end

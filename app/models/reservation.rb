class Reservation < ApplicationRecord
  belongs_to :camper
  belongs_to :campsite

  validates :camper_id, presence: true
  validates :campsite_id, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  # custom validation
  validate :end_date_after_start_date

  def end_date_after_start_date
    if end_date.present? && start_date.present? && end_date < start_date
      errors.add(:end_date, "must be after the start date")
    end
  end

  
end

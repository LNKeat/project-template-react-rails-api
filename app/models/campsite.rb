class Campsite < ApplicationRecord
    has_many :reservations, dependent: :destroy
    has_many :campers

    validates :site_number, presence: true, uniqueness: true
    validates :description, presence: true, length: { minimum: 20 }
    validates :img_url, presence: true

end

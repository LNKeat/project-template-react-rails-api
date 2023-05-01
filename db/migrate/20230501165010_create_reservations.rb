class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.belongs_to :camper, null: false, foreign_key: true
      t.belongs_to :campsite, null: false, foreign_key: true

      t.timestamps
    end
  end
end

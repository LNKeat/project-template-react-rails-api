class CreateCampsites < ActiveRecord::Migration[6.1]
  def change
    create_table :campsites do |t|
      t.integer :number
      t.string :img_url
      t.text :description

      t.timestamps
    end
  end
end

class CreateCampers < ActiveRecord::Migration[6.1]
  def change
    create_table :campers do |t|
      t.string :username
      t.string :password_digest
      t.boolean :is_admin

      t.timestamps
    end
  end
end

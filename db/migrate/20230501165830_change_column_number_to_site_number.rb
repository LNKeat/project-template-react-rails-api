class ChangeColumnNumberToSiteNumber < ActiveRecord::Migration[6.1]
  def change
    rename_column :campsites, :number, :site_number
  end
end

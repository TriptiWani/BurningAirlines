class RemovePlaneFromFlights < ActiveRecord::Migration
  def change
    remove_column :flights, :plane, :text
  end
end

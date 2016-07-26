class AddColumnsToTables < ActiveRecord::Migration
  def change
    add_column :flights, :airplane_id, :integer
    add_column :reservations, :flight_id, :integer
    add_column :reservations, :user_id, :integer

  end
end

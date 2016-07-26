class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.integer :number
      t.string :origin
      t.string :destination
      t.string :date
      t.text :plane

      t.timestamps null: false
    end
  end
end

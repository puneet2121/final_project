class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :address
      t.integer :number_of_tenants
      t.string :image
      
      t.timestamps
    end
  end
end

class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :image
      t.string :bio

      t.references :house, foreign_key: true, index: true

      t.timestamps
    end
  end
end

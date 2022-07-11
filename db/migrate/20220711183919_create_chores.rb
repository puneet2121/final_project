class CreateChores < ActiveRecord::Migration[6.1]
  def change
    create_table :chores do |t|
      t.string :chore_name
      t.string :status
      t.string :occurence
      t.boolean :is_assigned

      t.references :house, foreign_key: true, index: true


      t.timestamps
    end
  end
end

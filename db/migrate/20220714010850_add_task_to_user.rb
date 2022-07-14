class AddTaskToUser < ActiveRecord::Migration[6.1]
  def change
    add_reference :chores, :user, index: true
  end
end

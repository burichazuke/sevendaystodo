class AddColumnToTodo < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :status, :integer, null: false
  end
end

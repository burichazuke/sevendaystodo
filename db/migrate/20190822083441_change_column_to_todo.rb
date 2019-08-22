class ChangeColumnToTodo < ActiveRecord::Migration[5.2]
  def change
    change_column :todos, :status, :integer, null: false, default: 0
  end
end

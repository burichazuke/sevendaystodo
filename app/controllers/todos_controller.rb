class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def new
    @todo = Todo.new
  end

  def create 
    @todo = Todo.create(todo_params)
    if @todo.save
      redirect_to root_path
    else
      redirect_to new_todo_path
    end
  end





  private

  def todo_params
    params.require(:todo).permit(:name, :description, :deadline).merge(user_id: current_user.id)
  end

end

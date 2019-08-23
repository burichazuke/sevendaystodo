class TodosController < ApplicationController
  def index
    @todos = Todo.all.order("deadline asc")
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

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    if @todo.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json
      end
    end
  end





  private

  def todo_params
    params.require(:todo).permit(:id, :name, :description, :deadline, :status).merge(user_id: current_user.id)
  end

end

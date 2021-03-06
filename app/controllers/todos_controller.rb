class TodosController < ApplicationController
  before_action :set_todos

  def index
    respond_to do |format|
      format.html 
      format.json 
    end
   end

  def new
    @todo = Todo.new
  end

  def create 
    @todo = Todo.create(todo_params)
    if @todo.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @todo = Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    if @todo.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json
      end
    else
      render :edit
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    redirect_to root_path
  end



  private

  def todo_params
    params.require(:todo).permit(:id, :name, :description, :deadline, :status).merge(user_id: current_user.id)
  end

  def set_todos
    @keyword = Todo.ransack(params[:q])
    @todos = @keyword.result(distinct: true).where(user_id: current_user.id).order("status asc", "deadline asc")
    todos_comp = @keyword.result(distinct: true).where(user_id: current_user.id, status: 1)
    gon.length = @todos.length
    gon.comp_length =  todos_comp.length
    if @todos.length != 0
      @percent = ((todos_comp.length.to_f / @todos.length.to_f).round(2) * 100).to_i
    end
  end

end

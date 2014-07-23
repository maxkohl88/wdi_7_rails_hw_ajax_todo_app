class HomeController < ApplicationController

  respond_to :json

  def index
    @todos = ToDo.all

    respond_with(@todos)
  end

  def show
    @todo = ToDo.find(params[:id])

    respond_with(@todo)
  end

end

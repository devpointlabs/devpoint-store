class Api::CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :destroy]

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      redirect_to categories_path
    else
      render :new
  end
end

  def destroy
    @category.destroy
    redirect_to category_path
  end

  private
   def set_category
    @category = Category.find(params[:id])
   end

   def category_params
    params.require(:category).permit(:name)
   end
end

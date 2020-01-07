class Api::CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  def index
    render json: Category.all
  end

  def show
    render json: @category
  end

  def create
    category = Category.new(category_params)

    if category.save
      render json: category
    else
      render json: category.errors
  end
end

  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors
    end
  end

  def destroy
    @category.destroy
  end

  private
  
   def set_category
    @category = Category.find(params[:id])
   end

   def category_params
    params.require(:category).permit(:name)
   end

end

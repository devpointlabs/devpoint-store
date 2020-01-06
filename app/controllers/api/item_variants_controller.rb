class Api::ItemVariantsController < ApplicationController
  before_action :set_item
  before_action: :set_item_variant, only: [:update, :destroy, :show]
  
  def index
    render json: @item.item_variants
  end

  def show
    render json: @item_variant
  end

  def create
    item_variant = @item.item_variants.new(item_variant_params)
    if item_variant.save
      render json: item_variant
    else
      render json: item_variant.errors
    end
  end

  def update
    if @item_variant.update(item_variant_params)
      render json: @item_variant
    else
      render json: @item_variant.errors
    end
  end

  def destroy
    @item.destroy
    render json: { message: 'Item variant deleted' }
  end

  private
  def set_item
    @item = Item.find(params[:item_id])
  end

  def set_item_variant
    @item_variant = ItemVariant.find(params[:id])
  end

   def item_variant_params
    params.require(:item_variant).permit(:color, :size, :quantity, :image)
   end
end

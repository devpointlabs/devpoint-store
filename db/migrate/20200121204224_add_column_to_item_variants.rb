class AddColumnToItemVariants < ActiveRecord::Migration[6.0]
  def change
    add_column :item_variants, :price, :float
  end
end

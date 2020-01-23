class RemoveColumnToItemVariant < ActiveRecord::Migration[6.0]
  def change
    remove_column :item_variants, :color
  end
end

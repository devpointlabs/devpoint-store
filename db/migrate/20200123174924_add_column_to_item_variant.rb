class AddColumnToItemVariant < ActiveRecord::Migration[6.0]
  def change
    add_column :item_variants, :name, :string
  end
end

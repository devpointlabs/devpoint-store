class AddColumnToItem < ActiveRecord::Migration[6.0]
  def change
    add_column :item_variants, :back_image, :string
  end
end

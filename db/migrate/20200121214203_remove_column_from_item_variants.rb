class RemoveColumnFromItemVariants < ActiveRecord::Migration[6.0]
  def change
    remove_column :item_variants, :back_image, :string
  end
end

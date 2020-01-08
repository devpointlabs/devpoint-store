class RemoveColumnFromCategories < ActiveRecord::Migration[6.0]
  def change
    remove_column :categories, :Image, :string
    remove_column :categories, :FullWidth, :boolean
  end
end

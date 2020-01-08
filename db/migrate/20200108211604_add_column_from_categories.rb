class AddColumnFromCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :image, :string
    add_column :categories, :full_width, :boolean
  end
end

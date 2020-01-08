class AddColumnToCategory < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :Image, :string
    add_column :categories, :FullWidth, :boolean
  end
end

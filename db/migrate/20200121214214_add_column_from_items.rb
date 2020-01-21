class AddColumnFromItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :back_image, :string
  end
end

class CreateItemVariants < ActiveRecord::Migration[6.0]
  def change
    create_table :item_variants do |t|
      t.string :color
      t.string :image
      t.integer :quantity
      t.string :size
      t.belongs_to :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end

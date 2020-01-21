class ChangeColumnItems < ActiveRecord::Migration[6.0]
  def change
    change_table :items do |t|
      t.change :price, :float
    end
  end
end

class Item < ApplicationRecord
  belongs_to :category
  has_many :itemvariants
end

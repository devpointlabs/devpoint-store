1.times do
  cat = Category.create(
    name: 'T-shirts',
  )

  5.times do
    Item.create(
      name: Faker::Lorem.words(number: 1),
      price: 25.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      category_id: cat.id
    )
  end
end

1.times do
  cat = Category.create(
    name: 'Hats',
  )

  5.times do
    Item.create(
      name: Faker::Lorem.words(number: 1),
      price: 15.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      category_id: cat.id
    )
  end
end

1.times do
  cat = Category.create(
    name: 'Hoodies',
  )

  5.times do
    Item.create(
      name: Faker::Lorem.words(number: 1),
      price: 35.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      category_id: cat.id
    )
  end
end

1.times do
  cat = Category.create(
    name: 'Stickers',
  )

  5.times do
    Item.create(
      name: Faker::Lorem.words(number: 1),
      price: 5.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      category_id: cat.id
    )
  end
end
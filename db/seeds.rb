1.times do
  cat = Category.create(
    name: 'T-shirts',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519422/shirtimage_lsexnh.jpg',
    fullwidth: 'true'
  )

  5.times do
    Item.create(
      name: Faker::Lorem.words(number: 1),
      price: 25.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['fashion']),
      category_id: cat.id
    )
  end
end

1.times do
  cat = Category.create(
    name: 'Hats',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519429/hatimage_jqvmhz.jpg'
  )

  5.times do
    Item.create(
      name: Faker::Lorem.words(number: 1),
      price: 15.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['fashion']),
      category_id: cat.id
    )
  end
end

1.times do
  cat = Category.create(
    name: 'Hoodies',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519441/hoodieimage_uqkzat.jpg'
  )

  5.times do
    Item.create(
      name: Faker::Lorem.words(number: 1),
      price: 35.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['fashion']),
      category_id: cat.id
    )
  end
end

1.times do
  cat = Category.create(
    name: 'Stickers',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519447/stickerimage_o87upo.jpg'
  )

  5.times do
    Item.create(
      name: Faker::Lorem.words(number: 1),
      price: 5.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['fashion']),
      category_id: cat.id
    )
  end
end
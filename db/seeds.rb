1.times do
  cat = Category.create(
    name: 'T-shirts',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519422/shirtimage_lsexnh.jpg',
    full_width: 'true'
    )

  1.times do
    item = Item.create(
      name: 'T Shirt',
      price: 25.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958317/shortsleeve2_fqroqm.jpg',
      category_id: cat.id
      )

    1.times do
      ItemVariant.create(
        size: 'small',
        quantity: '3',
        image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958317/shortsleeve2_fqroqm.jpg',
        back_image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958309/shortsleevefront_mvg81i.jpg',
        item_id: item.id
        )
    end
  end
end

1.times do
  cat = Category.create(
    name: 'Hats',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519429/hatimage_jqvmhz.jpg',
    full_width: 'false'
    )

  1.times do
    item = Item.create(
      name: 'Hat',
      price: 15.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958403/hat_wwqd8t.png',
      category_id: cat.id
      )

    1.times do
      ItemVariant.create(
        size:'one size fits all',
        quantity:'3',
        image:'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958403/hat_wwqd8t.png',
        back_image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958403/hat_wwqd8t.png',
        item_id: item.id
        )
    end
  end 
end

1.times do
  cat = Category.create(
    name: 'Hoodies',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519441/hoodieimage_uqkzat.jpg',
    full_width: 'false'
    )

  1.times do
    item = Item.create(
      name: 'Grey Hoodie',
      price: 35.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958630/hoodiefront2_o0qskk.jpg',
      category_id: cat.id
      )

    1.times do
      ItemVariant.create(
        size: 'small',  
        quantity: '3',
        image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958630/hoodiefront2_o0qskk.jpg',
        back_image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958621/hoodieback_hevoyw.jpg',
        item_id: item.id
        )
    end
  end
end

1.times do
  cat = Category.create(
    name: 'Stickers',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519447/stickerimage_o87upo.jpg',
    full_width: 'false'
    )

  1.times do
    item = Item.create(
      name: Faker::Lorem.words(number: 1),
      price: 5.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958417/sticker1_xhisdz.jpg',
      category_id: cat.id
      )

    1.times do
      ItemVariant.create(
        size: 'one size fits all',
        quantity: '5',
        image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958417/sticker1_xhisdz.jpg',
        back_image: '',
        item_id: item.id
        )
    end
  end
end
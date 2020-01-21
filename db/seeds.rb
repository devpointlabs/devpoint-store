1.times do
  cat = Category.create(
    name: 'T-shirts',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519422/shirtimage_lsexnh.jpg',
    full_width: 'true'
    )

    sleeve = [ 'Long Sleeve Tee', 'Short Sleeve Tee' ]
    price = [ 25.00, 20.00 ]
    sleeveImage = [
      'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958293/longsleevefront_mfokvd.jpg',
      'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958317/shortsleeve2_fqroqm.jpg']
  2.times do
    item = Item.create(
      name: sleeve[0],
      price: price[0],
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: sleeveImage[0],
      category_id: cat.id
      )
      sleeve.delete_at(0)
      sleeveImage.delete_at(0)

    size = [ 'Small', 'Medium', 'Large' ]
    3.times do
      ItemVariant.create(
        size: size[0],
        quantity: '3',
        image: item.image,
        back_image: ' ',
        item_id: item.id,
        price: price[0]
        )
        size.delete_at(0)
        price.delete_at(0)
    end
  end
end

1.times do
  cat = Category.create(
    name: 'Hoodies',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958618/hoodie1_kbvtue.jpg',
    full_width: 'false'
    )


      hoodieStyle = [ 'Black hoodie', 'Grey hoodie' ]
      hoodiePrice = [ 35.99, 49.99 ]
      hoodieImage = [
        'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958618/hoodie1_kbvtue.jpg',
        'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958630/hoodiefront2_o0qskk.jpg']

  2.times do
    item = Item.create(
      name: hoodieStyle[0] ,
      price: hoodiePrice[0],
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: hoodieImage[0],
      category_id: cat.id
      )
      hoodieStyle.delete_at(0)
      hoodieImage.delete_at(0)

    size = [ 'Small', 'Medium', 'Large' ]
    3.times do
      ItemVariant.create(
        size: size[0],
        quantity: '3',
        image: item.image,
        back_image: '',
        item_id: item.id,
        price: hoodiePrice[0]
        )
        size.delete_at(0)
        hoodiePrice.delete_at(0)
    end
  end
end

1.times do
  cat = Category.create(
    name: 'Hats',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519429/hatimage_jqvmhz.jpg',
    full_width: 'false'
    )
  
  style = [ 'hat', 'cap' ]
  image = [ 
  'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958403/hat_wwqd8t.png',
  'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958411/hat2_n5gvy0.jpg']
  2.times do
    item = Item.create(
      name: style[0],
      price: 15.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: image[0],
      category_id: cat.id
      )
      style.delete_at(0)
      image.delete_at(0)

    1.times do
      ItemVariant.create(
        size:'one size fits all',
        quantity:'3',
        image: item.image,
        back_image: " ",
        item_id: item.id,
        price: 15.00
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

  3.times do
    item = Item.create(
      name: 'Sticker',
      price: 5.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958417/sticker1_xhisdz.jpg',
      category_id: cat.id
      )

    1.times do
      ItemVariant.create(
        size: '',
        quantity: '5',
        image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958417/sticker1_xhisdz.jpg',
        back_image: '',
        item_id: item.id,
        price: 5.00
        )
    end
  end
end
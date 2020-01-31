1.times do
  cat = Category.create(
    name: 'T-shirts',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519422/shirtimage_lsexnh.jpg',
    full_width: 'true'
    )

  sleeve = [ 'Planet Short Sleeve', 'DPL Short Sleeve' ]
  price = [ 25.00, 20.00 ]
  sleeveImage = ['https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501801/Planet_l2xxpi.jpg',
    'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501631/DPL_Gray_ijrkr5.jpg']
    backsleeveimg = [ 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501801/Planet_l2xxpi.jpg',
    'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501581/DPL_Gray_Back_c8xyah.jpg']
  2.times do
    item = Item.create(
      name: sleeve[0],
      price: price[0],
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: sleeveImage[0],
      category_id: cat.id,
      back_image:backsleeveimg[0], 
      )
      sleeve.delete_at(0)
      price.delete_at(0)
      sleeveImage.delete_at(0)
      backsleeveimg.delete_at(0)

    size = [ 'Small', 'Medium', 'Large' ]
    3.times do
      ItemVariant.create(
        size: size[0],
        quantity: '3',
        image: item.image,
        item_id: item.id,
        price: item.price,
        name: item.name
        )
        size.delete_at(0)
        

    end
  end
end

1.times do
  cat = Category.create(
    name: 'Hoodies',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958618/hoodie1_kbvtue.jpg',
    full_width: 'false'
    )
    
  hoodieStyle = [ 'DPL Jacket', 'DPL Gray Hoodie', 'Dpl Black Hoodie' ]
  hoodiePrice = [ 35.99, 49.99, 35.99]
  hoodieImage = [ 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501723/DPL_Jacket_lydqrn.jpg',
    'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501612/DPL_Gray_Hoodie_bx79sy.jpg',
  'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501571/DPL_Black_Hoodie_dbdw3e.jpg']

  backhoodieimg = [ 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501785/DPL_Jacket2_ydn5eb.jpg',
  'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501596/DPL_Gray_Hoodie_Back_nn2ud6.jpg',
  'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958625/hoodieback2_ccp1sg.jpg']
  3.times do
    item = Item.create(
      name: hoodieStyle[0] ,
      price: hoodiePrice[0],
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: hoodieImage[0],
      category_id: cat.id,
      back_image:backhoodieimg[0],
      )
      hoodieStyle.delete_at(0)
      hoodiePrice.delete_at(0)
      hoodieImage.delete_at(0)
      backhoodieimg.delete_at(0)

    size = [ 'Small', 'Medium', 'Large' ]
    3.times do
      ItemVariant.create(
        size: size[0],
        quantity: '3',
        image: item.image,
        item_id: item.id,
        price: item.price,
        name: item.name
        )
        size.delete_at(0)
    end
  end
end

1.times do
  cat = Category.create(
    name: 'Hats',
    image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578519429/hatimage_jqvmhz.jpg',
    full_width: 'false'
    )

  style = [ 'Hat',  ]
  image = [ 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501658/DPL_Hat_ujtzmt.jpg',]
  backhatimg = [ 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1580501667/DPL_Hat2_dfwies.jpg',]
  1.times do
    item = Item.create(
      name: style[0],
      price: 15.00,
      desc: Faker::Lorem.paragraph(sentence_count: 3),
      image: image[0],
      category_id: cat.id,
      back_image:backhatimg[0]
      )
      style.delete_at(0)
      image.delete_at(0)
      backhatimg.delete_at(0)
      
    1.times do
      ItemVariant.create(
        size:'One Size',
        quantity:'3',
        image: item.image,
        item_id: item.id,
        price: item.price,
        name:item.name
        )
    end
  end 
end

1.times do
  cat = Category.create(
    name: 'Miscellaneous',
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
        size: 'One Size',
        price: item.price,
        quantity: '5',
        image: 'https://res.cloudinary.com/dyhj8aqsh/image/upload/v1578958417/sticker1_xhisdz.jpg',
        item_id: item.id,
        name: item.name
        )
    end
  end
end
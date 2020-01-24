import React from 'react'
import axios from 'axios'


export const ProductContext = React.createContext();
export const ProductConsumer = ProductContext.Consumer

export class ProductProvider extends React.Component {
  state = {
    itemVarients: [],
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentDidMount() {
    const cartlocal = localStorage.getItem('myCart')
    this.setState({ cart: JSON.parse(cartlocal) ? JSON.parse(cartlocal) : [] }, this.addTotals)
    axios.get("/api/allItemV")
      .then(res => {
        this.setState({ itemVarients: [...res.data], })
      })
      .catch(err => {
        console.log(err)
      })
  }
// compares id's to submitted id
  getItem = (id) => {
    const itemVarient = this.state.itemVarients.find(itemVarient => itemVarient.id == id)
    return itemVarient
  }
// checks for duplicates
  checkCart = (itemVarient, tempProducts) => {
    const { cart, } = this.state
    cart.length >= 1 ? cart.map(c => {
      if (c.id === itemVarient.id)
        alert("in cart")
        else
        this.setState({
          itemVarients: [...tempProducts],
          cart: [itemVarient, ...this.state.cart]
        }, () => {
          this.addTotals()
          localStorage.setItem('myCart', JSON.stringify(this.state.cart))
        })

    })
    :
    this.setState({
      itemVarients: [...tempProducts],
      cart: [itemVarient, ...this.state.cart]
    }, () => {
      this.addTotals()
      localStorage.setItem('myCart', JSON.stringify(this.state.cart))
    })
  }

  // add to cart function
  addToCart = (id, itemqty) => {
    // if statement to check for size and quant !null
    if ( id === "") {
      alert('Please fill in all fields')
    } else if (itemqty === "") {
      alert('Please fill in all fields')
    } else {
      debugger
    let tempProducts = [...this.state.itemVarients]
    const index = tempProducts.indexOf(this.getItem(id))
    const itemVarient = tempProducts[index]
    itemVarient.inCart = true
    itemVarient.qty = itemqty
    const price = itemVarient.price
    itemVarient.total = price * itemVarient.qty
    this.checkCart(itemVarient, tempProducts)
    }
  }

// original add to cart

  //   this.setState(() => {
  //     return { itemVarients: tempProducts, cart: [itemVarient, ...this.state.cart ] }
  //   }, () => {
  //     this.addTotals()
  //     localStorage.setItem('myCart', JSON.stringify(this.state.cart))
  //   })
  // }



  // add quantity
  increment = (id) => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(itemVarient => itemVarient.id === id)
    const index = tempCart.indexOf(selectedProduct)
    const itemVarient = tempCart[index]
    itemVarient.qty = parseInt(itemVarient.qty) + 1
    itemVarient.total = itemVarient.qty * itemVarient.price
    this.setState(() => {
      return {
        cart: [...tempCart]
      }
    }, () => {
      this.addTotals()
      localStorage.setItem('myCart', JSON.stringify(this.state.cart))
    })
  }
  // quantity decrease
  decrement = (id) => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(selectedProduct)
    const itemVarient = tempCart[index]
    itemVarient.qty = itemVarient.qty - 1
    itemVarient.total = itemVarient.qty * itemVarient.price
    if (itemVarient.qty === 0) {
      return this.removeItem(id)
    }
    this.setState(() => {
      return {
        cart: [...tempCart]
      }
    }, () => {

      this.addTotals()
      localStorage.setItem('myCart', JSON.stringify(this.state.cart))
    })
  }
  // del item
  removeItem = (id) => {
    let tempProducts = [...this.state.itemVarients]
    let tempCart = [...this.state.cart]
    tempCart = tempCart.filter(itemVarient => itemVarient.id !== id)
    const index = tempProducts.indexOf(this.getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0
    this.setState(() => {
      return {
        cart: [...tempCart],
        itemVarients: [...tempProducts]
      }
    }, () => {
      this.addTotals()
      localStorage.setItem('myCart', JSON.stringify(this.state.cart))
    })
  }
  // clear cart function
  clearCart = () => {
    this.setState(() => {
      return { cart: [] }
    }, () => {
      this.setProducts();
      this.addTotals();
    })
  }
  // calculate totals
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(itemV => (subTotal += itemV.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal.toFixed(2),
        cartTax: tax.toFixed(2),
        cartTotal: total.toFixed(2)
      }
    })
  }
  
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        addToCart: this.addToCart,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }

}
// const ProductConsumer = ProductContext.Consumer
// export { ProductProvider, ProductConsumer, }
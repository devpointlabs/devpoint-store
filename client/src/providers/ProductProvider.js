import React from 'react';
import axios from 'axios';

class ProductProvider extends React.Component {
  state = {
    itemVarients: [],
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentDidMount() {
      axios.get("/api/allItemV")
      .then( res => {
        this.setState({ itemVarients: [ ...res.data], });
      })
      .catch( err => {
        console.log(err)
      })
  }

  getItem = (id) => {
    const itemVarient = this.state.itemVarients.find(itemVarient => itemVarient.id === id)
    return itemVarient
  }


  addToCart = (id) => {
    let tempProducts = [...this.state.itemVarients]
    const index = tempProducts.indexOf(this.getItem(id))
    const itemVarient = tempProducts[index]
    itemVarient.inCart = true
    itemVarient.qty = 1
    const price = itemVarient.price
    itemVarient.total = price

    this.setState(() => {
      return { itemVarients: tempProducts, cart: [...this.state.cart, itemVarient] }
    }, () => {
      this.addTotals();
    })
  }

  increment = (id) => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(itemVarient => itemVarient.id === id)
    const index = tempCart.indexOf(selectedProduct)
    const itemVarient = tempCart[index]
    itemVarient.qty = itemVarient.qty + 1
    itemVarient.total = itemVarient.qty * itemVarient.price
    this.setState(() => {
      return {
        cart: [...tempCart]
      }
    }, () => {
      this.addTotals()
    })
  }

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
    })
  }

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
    })
  }

  clearCart = () => {
    this.setState(() => {
      return { cart: [] }
    }, () => {
      this.setProducts();
      this.addTotals();
    })
  }

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(itemVarient => (subTotal += itemVarient.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
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

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer
export { ProductProvider, ProductConsumer }
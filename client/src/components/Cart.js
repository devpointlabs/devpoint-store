import React from "react";
import styled from 'styled-components'
import { ProductContext } from '../providers/ProductProvider'
import { Image, Header, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  // will need to pass in or grab items/item variants that were added to cart
  state = {
    itemVarients: [],
    cart: [],
    inCart: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentDidMount() {
    console.log(this.context)
  }

  showItems() {
    return this.context.cart.map(c => (
      <>
        <div style={{ backgroundColor: 'white', overflow: 'hidden', position: 'relative' }}>
          <Image src={c.image} style={{ height: '150px', width: '150px', padding: '10px', float: 'left' }} />
          <Button 
            onClick={()=> this.context.removeItem(c.id)}
            backgroundColor='grey'
            floated='right'
            style={{ borderRadius: '0px', height: '150px', width: '60px' }}>
            <i
              class="icon trash large"
              onClick={this.handleDelete}
            />
          </Button>
          {/* Shirt below is a placeholder for c.name */}
          <Header as='h2' style={{ position: 'relative', left: '10px', top: '60px' }} >Shirt, {c.size} x{c.qty} </Header>
          <Header as='h2' style={{ textAlign: 'right', position: 'relative', top: '10px', left: '-30px' }}> ${c.total} </Header>
        </div>
      </>
    ))
  }

// if cart is empty render EMPTY otherwise render cart items
  renderCart() {
    if (this.context.cart.length >= 1) {
      return (
       this.showItems()
      )
    } else {
      return (
       <Header as='h3'> Oh no, your cart is empty! Continue <Link to='/'>shopping?</Link> </Header>
      )
    }
  }

  render() {
    return ( 
      <>
      <Page>
          <Container>
          <Header as='h1' style={{ padding: '10px'}}> Cart </Header>
          {this.renderCart()}
          </Container>
        <br />
        <br />
        <br />
        <br />
      </Page>
        <Header as='h4' style={{ textAlign: 'right', position: 'relative', left: '-30px'}}> Price: ${this.context.cartSubTotal} </Header>
        <Header as='h4' style={{ textAlign: 'right', position: 'relative', left: '-30px'}}> Tax: ${this.context.cartTax} </Header>
        <Header as='h3' style={{ textAlign: 'right', position: 'relative', left: '-30px'}}> Total: ${this.context.cartTotal} </Header>
        <Button size='huge' floated='right' color='black' style={{ borderRadius: '0px', position: 'relative', left: '-25px', margin: '0px 0px 90px 0px'}}> Checkout </Button>
            </>
    )
  }
}

const Page = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  height: '3000px';
  width: '3000px';
  `

Cart.contextType = ProductContext
export default Cart;
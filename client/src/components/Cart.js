import React from "react";
import styled from 'styled-components'
import { ProductContext } from '../providers/ProductProvider'
import { Image, Header, Container, Button, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import BraintreeDrop from './BraintreeDrop'

class Cart extends React.Component {
  // will need to pass in or grab items/item variants that were added to cart
  state = {
    itemVarients: [],
    cart: [],
    inCart: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    checkout: false
  }

  componentDidMount() {
    console.log(this.context)
  }

  showItems() {
    return this.context.cart.map(c => (
      <>
        <div style={{ backgroundColor: 'white', overflow: 'hidden', position: 'relative', margin: '0px 0px 20px 0px' }}>
          <Image src={c.image} style={{ height: '160px', width: '150px', padding: '10px', float: 'left' }} />
          <Button 
            onClick={()=> this.context.removeItem(c.id)}
            backgroundColor='grey'
            floated='right'
            style={{ borderRadius: '0px', height: '162px', width: '60px' }}>
            <i
              class="icon trash large"
              onClick={this.handleDelete}
            />
          </Button>

          <Icon 
            style={{ position: 'relative', cursor: 'pointer', top: '10px'}}
            color='grey'
            size='large'
            name='plus square'
            onClick={() => this.context.increment(c.id)}
          />
          <Icon 
            style={{position: 'relative', cursor: 'pointer', top: '10px'}}
            color='grey'
            size='large'
            name='minus square'
            onClick={() => this.context.decrement(c.id)}
          />

          <Header as='h2' style={{ position: 'relative', left: '10px', top: '75px' }} >{c.name}, {c.size} x{c.qty} </Header>

          <Header as='h2' style={{ textAlign: 'right', position: 'relative', top: '20px', left: '-20px'}}> ${c.total.toFixed(2)} </Header>
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
       <Header as='h3'> Your cart is empty! Continue <Link to='/'>shopping?</Link> </Header>
      )
    }
  }

  toggleCheckout = () => {
    this.setState({ checkout: !this.state.checkout})
  }

  openCheckout = () => {
    if (this.state.checkout === true) {
      return (
        <>
          <br />
          <Segment style={{ padding: '0px 150px 0px 150px'}}>
            <BraintreeDrop total={this.context.cartTotal}/>
          </Segment>
        </>
    )}    
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
        <Header as='h2' style={{ textAlign: 'right', position: 'relative', left: '-30px'}}> Total: ${this.context.cartTotal} </Header>
        
        <Button
          total={this.context.cartTotal}
          onClick={this.toggleCheckout}
          size='huge'
          floated='right'
          color='black'
          style={{
            borderRadius: '0px',
            position: 'relative',
            left: '-25px',
            margin: '0px 0px 90px 0px'
          }}>
          Checkout 
        </Button>
        <br />
        <br />
        {this.openCheckout()}
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
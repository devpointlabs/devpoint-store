import React from "react";
import gshirt from './Images/gshirt.jpg'
import styled from 'styled-components'
import { ProductContext } from '../providers/ProductProvider'
import { Image, Header, Container, Button } from 'semantic-ui-react'

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



  showItems() {
    // map through items to make dynamic
    return (
      <>
        <div style={{ backgroundColor: 'white', overflow: 'hidden', position: 'relative' }}>
          <Image src={gshirt} style={{ height: '130px', width: '130px', padding: '10px', float: 'left' }} />
          <Button color='grey' floated='right' style={{ borderRadius: '0px', height: '140px', width: '60px' }}>
            <i
              color='white'
              class="icon trash large"
              onClick={this.handleDelete}
            />
          </Button>
          <Header as='h2' style={{ position: 'relative', left: '10px', top: '60px' }} > shirt wow, medium x1 </Header>
          <Header as='h2' style={{ textAlign: 'right', position: 'relative', top: '10px', left: '-30px' }}> $25.00 </Header>
        </div>
      </>
    )
  }
// if cart is empty render EMPTY otherwise render cart items
  renderCart() {

    if (this.context.cart.length >= 1) {
      return (

        <div>
          has something in cart
            </div>
      )

    } else {
      return (
        <div>empty</div>
      )
    }
  }
 


  render() {

    return (
     
      //    <>
      // <Page>
      //     <Container>
      //     <Header as='h1'> Cart </Header>
      //     { this.showItems() }
      //     </Container>
      //   <br />
      //   <br />
      //   <br />
      //   <br />
      //   </Page>
      //   <Header as='h2' style={{ textAlign: 'right', position: 'relative', left: '-30px'}}> Total: $25.00 </Header>
      //   <Button size='huge' floated='right' color='black' style={{ borderRadius: '0px', position: 'relative', left: '-25px'}}> Checkout </Button>
      //   <br />
      //   <br />
      //   <br />
      //   <br />
      //   <br /> 
      //    <div>


      //    </div>

      //    </> 
      <div>
        
        {this.renderCart()}

      </div>

    )
  }
}


const Page = styled.body`
  background-color: rgba(0, 0, 0, 0.03);
  `

Cart.contextType = ProductContext
export default Cart;
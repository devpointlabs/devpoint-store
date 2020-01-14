import React from "react";
import gshirt from './Images/gshirt.jpg'
import styled from 'styled-components'
import { Image, Header, Container, Button } from 'semantic-ui-react'

class Cart extends React.Component {
  // will need to pass in or grab items/item variants

  // handleDelete = () => {
  // }

  //  item map function
      //  each item will be in its own white segment
      // segments will exist in a container
  showItems() {
    // map through items to make dynamic
    return (
      <>
      <div style={{ backgroundColor: 'white', overflow: 'hidden', position: 'relative'}}>
        <Image src={gshirt} style={{ height: '130px', width: '130px', padding: '10px', float: 'left' }}/>
        <Header as='h2' style={{ position: 'relative', left: '10px', top: '60px'}} > shirt wow, medium x1 </Header>
        <Header as='h2' style={{ textAlign: 'right', position: 'relative', top: '10px', left: '-30px'}}> $25.00 </Header>
        <Button veritcal fluid color='grey' floated='right' style={{ borderRadius: '0px' }}> 
          <i 
            color='white'
            class="icon trash large"
            onClick={this.handleDelete}
          /> 
        </Button>
      </div>
      </>
      )
  }

  render() {
    return (
      <>
      <Page>
        <Container>
        <Header as='h1'> Cart </Header>
        { this.showItems() }
        </Container>
      <br />
      <br />
      <br />
      <br />
      </Page>
      <Header as='h2' style={{ textAlign: 'right', position: 'relative', left: '-30px'}}> Total: $25.00 </Header>
      <Button floated='right' color='black' style={{ borderRadius: '0px', position: 'relative', left: '-25px'}}> Checkout </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      </>
    )
  }
}

const Page = styled.body`
  background-color: rgba(0, 0, 0, 0.03);
  height: '1000px';
  width: '1000px';
`

export default Cart;
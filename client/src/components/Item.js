import React from 'react'
import axios from 'axios'
import shirt from './Images/shirt.png'
import styled from 'styled-components'
import { Container, Button, Image, Header, Segment } from 'semantic-ui-react'

class Item extends React.Component {
  state = { item: {} }

  componentDidMount() {
    const { match: { params: { id, category_id } } } = this.props
    axios.get(`/api/categories/${category_id}/items/${id}`)
    .then( res => {
        this.setState({ item: res.data })
    })
    .catch(err => {
      console.log(err)
    })
}

render() {
  // const { match: { params: { id, department_id } } } = this.props
  // const { name, description, price } = this.state.item

  return(
    <>
    <Container>
      {/* image on right */}
      {/* more images underneath (toggle?) (will need onClick and onHover)  */}
      <Grid>
        <div> 
          <Image src={shirt} />
        </div>
        <div style={{ backgroundColor: 'grey'}}>
          <Header as='h1'> Purple Shirt</Header>
        </div>
        </Grid>
      {/* info, size, quantity and add to cart on right */}
      {/* desc underneath */}

    </Container>
    </>
    )
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 200px 200px;
  color: grey;
  grid-gap: 100px;
  margin: 50px 25px 25px 50px;
`


export default Item
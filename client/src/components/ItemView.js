import React from 'react'
import axios from 'axios'
import gshirt from './Images/gshirt.jpg'
import gshirtB from './Images/gshirt-b.jpg'
import gshirtW from './Images/gshirt-w.jpg'
import gshirtWB from './Images/gshirt-wb.jpg'
import styled from 'styled-components'
import { Container, Button, Image, Header, Dropdown, Form, TextArea } from 'semantic-ui-react'

// TODO: make responsive

// below are size options to make demo work, will need to change for real data later

const sizeOptions = [
  {
    key: 'S',
    text: 'S',
    value: 'S'
  },
  {
    key: 'M',
    text: 'M',
    value: 'M'
  },
  {
    key: 'L',
    text: 'L',
    value: 'L'
  }
]

class ItemView extends React.Component {
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
    // const { match: { params: { id, category_id } } } = this.props
    // const { name, description, price } = this.state.item

  return(
    <>
    <Container>
      <Grid>
        <div> 
          <Image src={gshirt} /> {/* item.image */}
          {/* TODO: // change main display on click */}
          <Mini style={{ }}>
          <div center> <Image src={gshirt} /> </div> {/* placeholder for db images - clarke suggested a carousel? */}
          <div> <Image src={gshirtB} /> </div>
          <div> <Image src={gshirtW} /> </div>
          <div> <Image src={gshirtWB} /></div>
          </Mini>
        </div>
        
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)', height: '500px', width: '450px', padding: '40px'}}>
          <Header as='h1'> Neat Shirt </Header> {/* item.name */}
          <Header as='h2' style={{ color: '#A9A9A9' }}> $25.00 </Header> {/* item.price */}
          <Header as='h3'> Size </Header> {/* item.size */}
            <Dropdown
            placeholder='Select Size'
            selection
            options={sizeOptions}
            style={{ backgroundColor: '#ececec' }}
            />
          <Header as='h3'> Quantity </Header> {/* item.quantity ? */}
            <Form>
              <TextArea style={{ height: '45px', width: '120px', margin: '0px 0px 20px 0px', backgroundColor: '#ececec' }} placeholder='1' />
            </Form>
          <Button size='huge' basic color='black' style={{ margin: '20px 0px 0px 0px'}}> Add to Cart </Button>
        </div>
      </Grid>

      <Desc>
        {/* <p> { item.desc } </p> */}
        <p> When a black cat crosses your path, nothing happens. It's just a cat.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat enim vitae lectus consectetur laoreet. Maecenas in massa vel leo efficitur mattis sed eget massa. Pellentesque posuere, nibh non tempus egestas, erat nisi interdum elit, vitae eleifend elit nunc eget massa. Proin et urna ut risus gravida euismod non vitae nisl. </p>
      </Desc>
    </Container>
    </>
    )
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 450px);
  grid-template-rows: repeat(2, 225px);
  grid-gap: 50px;
  margin: 50px 25px 25px 50px;
`

const Mini = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(4, 40px);
  margin: 20px 20px 20px 70px;
`

const Desc = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  height: 200px;
  width: 600px;
  padding: 25px;
  margin: 100px 10px 10px 250px;
`

export default ItemView
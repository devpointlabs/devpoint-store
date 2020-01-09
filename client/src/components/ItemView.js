import React from 'react'
import axios from 'axios'
import gshirt from './Images/gshirt.jpg'
import gshirtB from './Images/gshirt-b.jpg'
import gshirtW from './Images/gshirt-w.jpg'
import gshirtWB from './Images/gshirt-wb.jpg'
import styled from 'styled-components'
import { Container, Button, Image, Header, Dropdown, Form } from 'semantic-ui-react'

// TODO: make responsive
// TODO: modify + add code to be responsive to data when db is made

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
  state = { item: {}, currentImage: 0 }

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
    const { match: { params: { id, category_id } } } = this.props
    const { name, desc, price, image } = this.state.item

  return(
    <>
    <Container>
      <Grid>
        <div> 
          {/* will need to adjust function for item.image */}
        {(() => {
        switch (this.state.currentImage) {
          case 1: return <Image src={image} />
          case 2: return <Image src={gshirtW} />
          case 3: return <Image src={gshirtWB} />
          default: return <Image src={gshirt} />
        }
      })()}

          <Mini style={{ }}>
          <div> <Image src={gshirt} onClick={ () =>  this.setState({ currentImage: 0 }) } /> </div> {/* placeholder for db images - clarke suggested a carousel? */}
          <div> <Image src={gshirtB} onClick={ () => this.setState({ currentImage: 1 }) }/> </div>
          <div> <Image src={gshirtW} onClick={ () =>  this.setState({ currentImage: 2 }) }/> </div>
          <div> <Image src={gshirtWB} onClick={ () => this.setState({ currentImage: 3 }) }/> </div>
          </Mini>
        </div>
        
        {/* possiblity to make this into second Item/Cart Form and render here instead */}

        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)', height: '550px', width: '450px', padding: '40px'}}>
          <Header as='h1'> { name } </Header>
          <Header as='h2' style={{ color: '#A9A9A9' }}> $ { price }.00 </Header>
          <Header as='h3'> Size </Header>
            <Dropdown
            placeholder='Select Size'
            selection
            options={sizeOptions}
            style={{ backgroundColor: '#ececec' }}
            />
          <Header as='h3'> Quantity </Header> {/* item.quantity ? */}
            <Form>
              {/* will need to write an onchange function here */}
              <Form.TextArea defaultValue={1} style={{ height: '45px', width: '120px', margin: '0px 0px 20px 0px', backgroundColor: '#ececec' }} placeholder='1' />
            </Form>
          <Button size='huge' basic color='black' style={{ margin: '20px 0px 0px 0px'}}> Add to Cart </Button>
        </div>
      </Grid>

      <Desc>
        <p> { desc } </p>
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
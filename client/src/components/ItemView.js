import axios from 'axios'
import ItemForm from './ItemForm'
import gshirt from './Images/gshirt.jpg'
import gshirtB from './Images/gshirt-b.jpg'
import gshirtW from './Images/gshirt-w.jpg'
import gshirtWB from './Images/gshirt-wb.jpg'
import React from 'react'
import styled from 'styled-components'
import { Container, Button, Image, Header, Dropdown, Form, Modal } from 'semantic-ui-react'

// TODO: make responsive
// TODO: modify + add code to be dynamic to data when db is made
// TODO: make item form / update actions work - tries to add instead of update

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
  state = { item: {}, currentImage: 0, open: false }

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

  updateItem = (item) => {
    this.setState({ item })
  }

  handleDelete = () => {
    const { id, category_id } = this.props.match.params
    axios.delete(`/api/categories/${category_id}/items/${id}`)
    .then( res => {
      this.props.history.push(`/categories/${category_id}`)
  })
}

  showModal = () => this.setState({ open: !this.state.open})

  itemModal = () => {
    const { match: { params: { id, category_id } } } = this.props
    return (
      <Modal
        open={this.state.open}
        onClose={() => this.showModal()}
      >
        <Modal.Header>Update This Item</Modal.Header>
        <Modal.Content>
          <ItemForm id={id} category_id={category_id} close={this.showModal} update={this.updateItem} />
        </Modal.Content>
      </Modal>
    )
  }

  hover(e) {
    e.target.style.border = '2px solid #ececec'
    e.target.style.borderRadius = '7px'
  }

  clearHover(e) {
    e.target.style.border = 'none'
    e.target.style.borderRadius = 'none'
  }

  render() {
    // const { match: { params: { id, category_id } } } = this.props
    const { name, desc, price, image } = this.state.item

  return(
    <>
    <Container>
      <Grid>
        <div> 
          {/* will need to adjust function for item.image */}
          {(() => {
          switch (this.state.currentImage) {
            case 1: return <Image src={gshirtB} />
            case 2: return <Image src={gshirtW} />
            case 3: return <Image src={gshirtWB} />
            default: return <Image src={gshirt} />
            // default: return <Image src={image} />
          }
          })()}

{/* placeholder for db images */}
      <Mini style={{ }}>
        <div> <Image src={gshirt}
          style={{ cursor: 'pointer'}}
          onMouseOver={this.hover}
          onMouseLeave={ this.clearHover }
          onClick={ () =>  this.setState({ currentImage: 0 }) }
          /> </div>
        <div> <Image src={gshirtB}
          style={{ cursor: 'pointer' }} 
          onMouseOver={this.hover}
          onMouseLeave={ this.clearHover }
          onClick={ () => this.setState({ currentImage: 1 }) }
          />
        </div>
        <div>
          <Image src={gshirtW}
          style={{ cursor: 'pointer'}}
          onMouseOver={this.hover}
          onMouseLeave={ this.clearHover }
          onClick={ () =>  this.setState({ currentImage: 2 }) }
          />
        </div>
        <div> 
          <Image src={gshirtWB}
          style={{ cursor: 'pointer'}}
          onMouseOver={this.hover}
          onMouseLeave={ this.clearHover }
          onClick={ () => this.setState({ currentImage: 3 }) }
          />
        </div>
      </Mini>
    </div>
        
        {/* possiblity to make below section into second Item/Cart Form and render here instead */}

        {/* will need to figure out functions for size/quantity */}
        {/* when cart is set up */}
          {this.itemModal()}
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
          <Header as='h3'> Quantity </Header>
            <Form>
              {/* might an onchange function here + in style */}
              <Form.TextArea defaultValue={1} style={{ height: '45px', width: '120px', margin: '0px 0px 20px 0px', backgroundColor: '#ececec' }} placeholder='1' />
            </Form>
          <Button size='huge' basic color='black' style={{ margin: '20px 0px 0px 0px'}}> Add to Cart </Button>

          {/* crud actions below should be hidden for regular users */}
          {/* edit item */}
          <div>
          <i style={{ cursor: 'pointer', position: 'relative', right: '-300px', bottom: '-75px' }}
          aria-hidden="true"
          class="icon pencil large" 
          onClick={() => this.showModal()}
          />
          {/* delete item */}
          <i 
          style={{ cursor: 'pointer', position: 'relative', right: '-325px', bottom: '-75px' }}
          aria-hidden="true"
          class="icon trash large"
          onClick={this.handleDelete}
          />
          </div>
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
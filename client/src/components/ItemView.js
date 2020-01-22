import axios from 'axios'
import ItemForm from './ItemForm'
import React from 'react'
import styled from 'styled-components'
import { ProductContext } from '../providers/ProductProvider'

import { Container, Button, Image, Icon, Header, Dropdown, Form, Input, Modal, Grid } from 'semantic-ui-react'

//TODO: figure out how to get more than one size in size options lol

class ItemView extends React.Component {
  state = { item: {}, currentImage: 0, open: false, itemVariants: [], selection: '' }

  componentDidMount() {
    const { match: { params: { id, category_id } } } = this.props
    
    axios.get(`/api/categories/${category_id}/items/${id}`)
      .then(res => {
        this.setState({ item: res.data })
      })
      .catch(err => {
        console.log(err)
      })

    axios.get(`/api/items/${id}/item_variants`)
      .then(res => {
        this.setState({ itemVariants: [...res.data], });
        console.log(this.state.itemVariants)
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
      .then(res => {
        this.props.history.push(`/categories/${category_id}`)
      })
  }

  showModal = () => this.setState({ open: !this.state.open })

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

  handleChange = (e) => {
    this.setState({ selection: e.currentTarget.id })
  }
  
  render() {
    const { name, desc, price, image, back_image } = this.state.item
    const { itemVariants } = this.state
    const ivList = itemVariants.map((itemVariant) => ({
      key: itemVariant.id,
      text: itemVariant.size,
      value: itemVariant.id,
      id: itemVariant.id
    }))
    
    // need function to determine if there is a back image or not and display/not display

  return(
    <>
    <Container>
      <Grid stackable centered columns={2}>
        {this.itemModal()}
        <div> 
        {(() => {
        switch (this.state.currentImage) {
        case 1: return <Image style={{ height: '500px', width: '450px'}} src={back_image} />
        default: return <Image style={{ height: '500px', width: '450px'}} src={image} />
        }
        })()}
      <Mini>
        <div> <Image src={ image }
          style={{ cursor: 'pointer', height: '100px' }}
          onMouseOver={ this.hover }
          onMouseLeave={ this.clearHover }
          onClick={ () =>  this.setState({ currentImage: 0 }) }
          /> 
        </div>
        <div> <Image src={ back_image }
          style={{ cursor: 'pointer', height: '100px' }} 
          onMouseOver={ this.hover }
          onMouseLeave={ this.clearHover }
          onClick={ () => this.setState({ currentImage: 1 }) }
          />
        </div>
      </Mini>
      </div>
        
        {/* possiblity to make below section into second Item/Cart Form component and render here instead */}

        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)', position: 'relative', height: '620px', width: '450px', padding: '40px', textAlign: 'left'}}>
          <Header as='h1'> { name } </Header>
          <Header as='h2' style={{ color: '#A9A9A9' }}> $ { price } </Header>
          <Header as='h3'> Size </Header>
            <Form>
                <Dropdown
                  placeholder='Select Size'
                  // options= {sizeOptions}
                  options={ivList}
                  selection

                  onChange={this.handleChange}
                  value={ivList.value}
                  style={{ backgroundColor: '#ececec' }}
                />
            </Form>
          <Header as='h3'> Quantity </Header>
            <Form>
              {/* might need an onchange function here to pass value to cart */}
              <Input defaultValue={1} style={{ height: '45px', width: '120px', margin: '0px 0px 20px 0px'}} placeholder='1' />
            </Form>
            <Button onClick={() => this.context.addToCart(this.state.selection)} animated size='huge' basic color='black' style={{ margin: '20px 0px 0px 0px'}}>
              <Button.Content visible>
                Add to Cart 
              </Button.Content> 
              <Button.Content hidden>
                <Icon name='cart' />
              </Button.Content>
            </Button>

          {/* crud actions below should be hidden for regular users */}

          {/* edit item */}
          <div>
            <i style={{ cursor: 'pointer', position: 'relative', right: '-300px', bottom: '-150px' }}
            aria-hidden="true"
            class="icon pencil large" 
            onClick={() => this.showModal()}
            />

          {/* delete item */}
            <i 
            style={{ cursor: 'pointer', position: 'relative', right: '-325px', bottom: '-150px' }}
            aria-hidden="true"
            class="icon trash large"
            onClick={this.handleDelete}
            />
          </div>
        </div>

      <div style={{ textAlign: 'left', position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.03)', height: '200px', width: '500px', padding: '25px', margin: '10px 10px 50px 10px' }} >
        <p> { desc } </p>
      </div>
      </Grid>
    </Container>
    </>

    )
  }
}

const Mini = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 90px);
  grid-template-rows: repeat(4, 40px);
  margin: 20px 20px 20px 140px;
`

ItemView.contextType = ProductContext
export default ItemView
import React from 'react'
import axios from "axios"
import { Form, Header, Button, Grid, Card, } from "semantic-ui-react"

class ItemVariantForm extends React.Component {
  state = { item_id: '', name: "", image: "", quantity: "", size: "", items: [] };

  //grab the item reveling details 
  componentDidMount() {
    axios.get('/api/all_items')
      .then(res => {
        this.setState({ items: res.data })
      })
      .catch(err => {
        console.log(err.responce)
      })
  }

  //add function
  addItemVariant = (name, image, quantity, size, item_id) => {
    axios.post(`/api/items/${item_id}/item_variants`,
      { name, image, quantity, size, item_id }).then(res => {
        const { items } = this.state;
        this.setState({ items: [...items, res.data] });
      });
  };

  //delete function
  deleteItemVariant = (id ,item_id) => {
    // debugger
    axios.delete(`/api/items/${item_id}/item_variants/${id}`)
      .then(res => {
        const { items } = this.state;
        this.setState({ items: items.filter(i => i.id !== id) });
      });
  };

  handleDrop = (e) => {
    this.setState({ item_id: e.currentTarget.id })
  }

  //this needs to get looked at
  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

  //this needs to get looked at
  handleSubmit = (e) => {
    // debugger
    e.preventDefault()
    const { name, quantity, size } = this.state
    const itemVariant = { name, quantity, size, }
    const { id, item_id, } = this.props
    if (id && item_id) {
      axios.put(`/api/items/${this.state.item_id}/item_variants/${id}`, itemVariant)
        .then(res => {
          this.props.update(res.data)
        })
      this.props.close()
      // debugger
    } else {
      axios.post(`/api/items/${this.state.item_id}/item_variants`, itemVariant)
        .then(res => {

      })
    }
  }

  renderDropDown = () => {
    const itemOptions = this.state.items.map(item => ({
      key: item.id,
      text: item.name,
      value: item.name,
      id: item.id
    })
    )
    return itemOptions
  }

  renderItem() {
    const { items, } = this.state
    return items.map(i => (
      <div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Card>
          <div>
            <ul style={view}>
              <li>
                {i.name}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </li>
            </ul>
            <center>
              <Button color="red" onClick={() => this.deleteItemVariant(i.id)}>
                delete
          </Button>
            </center>
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </Card>
      </div>
    ));
  }

  render() {
    const { name, image, quantity, size } = this.state
    return (
      <>
        <h1 style={view}>ItemVariantForm</h1>
        <Form onSubmit={this.handleSubmit} style={view}>
          <Form.Group>
            <Form.Dropdown
              placeholder='Specific Item'
              fluid
              selection
              options={this.renderDropDown()}
              onChange={this.handleDrop}
            />
            <Form.Input
              name='image'
              value={image}
              placeholder="Image"
              autoFocus
              onChange={this.handleChange}
            />
            <Form.Input
              name='quantity'
              value={quantity}
              placeholder="Quantity"
              autoFocus
              onChange={this.handleChange}
            />
            <Form.Input
              name='size'
              value={size}
              placeholder="Size"
              autoFocus
              onChange={this.handleChange}
            />
            <Form.Input
              name='name'
              value={name}
              placeholder="name"
              autoFocus
              onChange={this.handleChange}
            />
            <Form.Button color="blue">
              Submit
          </Form.Button>
            <br />
          </Form.Group>
        </Form>
        <center>
          <Grid.Column>
            <Grid columns={4}
              align="center">
              {this.renderItem()}
            </Grid>
          </Grid.Column>
        </center>
      </>
    )
  }
}

const view = {
  display: "flex",
  justifyContent: "center"
}

export default ItemVariantForm;

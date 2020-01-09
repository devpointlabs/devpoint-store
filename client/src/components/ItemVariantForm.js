import React, { Fragment } from 'react'
import axios from "axios"
import { Form, Header, Button, } from "semantic-ui-react"

class ItemVariantForm extends React.Component {
  state = { color: "", image: "", quantity: "", size: "" }
  //grab the item reveling details 
  componentDidMount() {
    const { id, item_id, } = this.props
    if (id && item_id)
      axios.get(`/api/items/${item_id}/item_variants/${id}`)
        .then(res => {
          const { color, image, quantity, size } = res.data
          this.setState({ color, image, quantity, size })
        })
        .catch(err => {
          console.log(err.responce)
        })
  }
  //accessing it's value's
  handleChange = (e) => {
    this.setState({
      color: e.target.value,
      image: e.target.value,
      quantity: e.target.value,
      size: e.target.value
    })
  }
  // action event
  handleSubmit = (e) => {
    e.preventDefault();
    this.addItemVariant(this.state.color,
      this.state.image,
      this.state.quantity,
      this.state.size)
    this.setState({ color: "", image: "", quantity: "", size: "" })
  }
  //adding aditional attributes
  addItemVariant = (color, image, quantity, size) => {
    axios.post(`api/items/${item_id}/item_variants`, { color, image, quantity, size })
      .then(res => {
        const { items, } = this.state
        this.setState({ items: [...items, res.data], })
      })
  }
  //discarding order
  deleteItem = (id) => {
    axios.delete(`api/items/${item_id}/item_variants/${id}`)
      .then(res => {
        const { items, } = this.state;
        this.setState({ items: items.filter(i => i.id != id), })
      })
  }
  renderItemVariantForm() {
    return this.state.items.map(i => (
      <div>
        <ul>
          {i.color}
          <Button onClick={() => this.deleteItem(i.id)}>Delete</Button>
        </ul>
        <ul>
          {i.image}
          <Button onClick={() => this.deleteItem(i.id)}>Delete</Button>
        </ul>
        <ul>
          {i.quantity}
          <Button onClick={() => this.deleteItem(i.id)}>Delete</Button>
        </ul>
        <ul>
          {i.size}
          <Button onClick={() => this.deleteItem(i.id)}>Delete</Button>
        </ul>
      </div>
    ))
  }
  render() {
    return (
      <Fragment>
        <div>
          <Header as="h1">New Item</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.input
              label="Color"
              placeholder="Add Color"
              required
              value={this.state.color}
              onChange={this.handleChange}
            />
            <Form.input
              label="Image"
              placeholder="Image"
              required
              value={this.state.image}
              onChange={this.handleChange}
            />
            <Form.input
              label="Quantity"
              placeholder="Quantity"
              required
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <Form.input
              label="Size"
              placeholder="Size"
              required
              value={this.state.size}
              onChange={this.handleChange}
            />
            <Form.Button color="blue">Submit</Form.Button>
          </Form>
        </div>
        {this.renderItemVariantForm()}
      </Fragment>
    )
  }
}

export default ItemVariantForm;

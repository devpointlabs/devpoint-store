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
  //this needs to get looked at
  handleChange = (e) => {
    const {target:{name, value }} = e
    this.setState({ [name]: value })
  }

  //this needs to get looked at
  handleSubmit = (e) => {
    e.preventDefault()
    const itemVariant = { ...this.state }
    const { id, item_id } = this.props
    if (id && item_id) {
      axios.put(`/api/items/${item_id}/item_variants/${id}`, item_variant)
        .then(res => {
          this.props.update(res.data)
        })
    } else {
      axios.post(`/api/items/${item_id}/item_variants`, item_variant)
        .then(res => {
          this.props.add(res.data)
        })
     }
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
          <Header as="h1" widths='equal'>
            New Item
          </Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.input
              name='color'
              label="Color"
              placeholder="Add Color"
              required
              value={this.state.color}
              onChange={this.handleChange}
            />
            <Form.input
              name='image'
              label="Image"
              placeholder="Image"
              required
              value={this.state.image}
              onChange={this.handleChange}
            />
            <Form.input
              name='quantity'
              label="Quantity"
              placeholder="Quantity"
              required
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <Form.input
              name='size'
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

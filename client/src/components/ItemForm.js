import axios from 'axios'
import React, { useState, useEffect, } from 'react';
import { Form } from 'semantic-ui-react'
import { Link, NavLink, } from 'react-router-dom';


class ItemForm extends React.Component {
  state = {
    category_id: '',
    name: '',
    price: '',
    desc: '',
    image: '',
  }

  componentDidMount() {
    const { id, category_id, } = this.props
    if (id && category_id)
      axios.get(`/api/categories/${category_id}/items/${id}`)
        .then(res => {
          const { category_id, name, desc, price, image, } = res.data
          this.setState({ category_id, name, desc, price, image })
        })
        .catch(err => {
          console.log(err.response)
        })
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }
//e.currentTarget.id
  handleDropdown = (e) => {
    this.setState({category_id: e.currentTarget.id})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, price, desc, } = this.state
    const item = { name, price, desc, }
    const { id, category_id, } = this.props
    if (id && category_id) {
      axios.put(`/api/categories/${this.state.category_id}/items/${id}`, item)
        .then(res => {
          this.props.update(res.data)
        })
    } else {
      
      axios.post(`/api/categories/${this.state.category_id}/items`, item)
        .then(res => {
          //clear the form function or redirect to itemView or custom component 
        })
    }
    // /api/categories/:category_id/items(.:format)
  }

  CategoryOptions = [
    { key: 1, text: 'TShirts', value: 'TShirts', id: 1 },
    { key: 2, text: 'Hoodies', value: 'Hoodies', id: 3 },
    { key: 3, text: 'Hats', value: 'Hats', id: 2 },
    { key: 4, text: 'Stickers', value: 'Stickers', id: 4 },
  ]

  render() {
    const { name, desc, price, image, } = this.state

    return (
      <>
        <h1>New Item</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>

            <Form.Dropdown
              placeholder='Category'
              fluid
              selection
              options={this.CategoryOptions}
              onChange={this.handleDropdown}
            />
            <Form.Input
              name='name'
              placeholder='Item Name'
              autoFocus
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              name='price'
              placeholder='Item Price'
              value={price}
              onChange={this.handleChange}
            />
            <Form.Input
              name='desc'
              placeholder='Item Description'
              value={desc}
              onChange={this.handleChange}
            />
            <Form.Input
              name='image'
              placeholder='Image URL'
              value={image}
              onChange={this.handleChange}
            />
            <Form.Button>
              Submit
          </Form.Button>
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default ItemForm

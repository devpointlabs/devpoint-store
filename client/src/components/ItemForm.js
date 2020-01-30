import axios from 'axios'
import React, { useState, useEffect, } from 'react';
import { Form, Card, } from 'semantic-ui-react'
import { Link, NavLink, } from 'react-router-dom';


class ItemForm extends React.Component {
  state = {category_id:'',name:'',price:'',desc:'', image:'', items: [] }

  componentDidMount() {
    axios.get(`/api/categories/${this.props.match.params.id}/items`)
    .then( res => {
      this.setState({ items: res.data })
    })
  }

  renderItems = () => (
    this.state.items.map( i => {
      return <p>{i.name}</p>
    })
  )

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
      axios.put(`/api/categories/${category_id}/items/${id}`, item)
        .then(res => {
          this.props.update(res.data)
        })
      this.props.close()
    } else {
      axios.post(`/api/categories/${this.props.match.params.id}/items`, item)
        .then(res => {
          //clear the form function or redirect to itemView or custom component 
        })
    }
    // /api/categories/:category_id/items(.:format)
  }

  CategoryOptions = [
    { key: 1, text: 'tShirts', value: 'TShirts', id: 1 },
    { key: 2, text: 'Hoodies', value: 'Hoodies', id: 3 },
    { key: 3, text: 'Hats', value: 'Hats', id: 2 },
    { key: 4, text: 'Stickers', value: 'Stickers', id: 4 },
  ]

  render() {
    const { name, desc, price, image, } = this.state
    return (
      <>
        <h1 style={view}>New Item</h1>
        <Form onSubmit={this.handleSubmit} style={view}>
          <Form.Group>
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
            <br />
            <Form.Button color="blue" style={view}>
              Submit
          </Form.Button>
          </Form.Group>
        </Form>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

      
        {this.renderItems()}
       
      </>
    )
  }
}


const view  = {
  display: "flex",
  justifyContent: "center"
}

export default ItemForm;

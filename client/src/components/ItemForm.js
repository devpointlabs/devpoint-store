import React from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class ItemForm extends React.Component {
  state = { name: '', price: '', desc: '', size: ''}

  componentDidMount() {
    const { id, category_id, } = this.props
    if (id && category_id)
      axios.get(`/api/departments/${category_id}/items/${id}`)
        .then(res => {
          const { name, desc, price, size } = res.data
          this.setState({ name, desc, price, size })
        })
        .catch(err => {
          console.log(err.response)
        })
  }

  handleChange = (e) => { 
     const { target: { name, value } } = e
     this.setState({ [name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const item = { ...this.state }
    const { id, category_id, } = this.props
    if (id && category_id) {
      axios.put(`/api/categories/${category_id}/items/${id}`, item)
        .then(res => {
          this.props.update(res.data)
        })
    } else {
      axios.post(`/api/categories/${category_id}/items`, item)
        .then(res => {
          this.props.add(res.data)
        })
    }
  }
  
  render() {
    const { name, desc, price, size} = this.state
    
    return (
      <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            name='name'
            placeholder='Item Name'
            autofocus
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
            name='size'
            placeholder='Size'
            value={size}
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
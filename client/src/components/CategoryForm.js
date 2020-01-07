import React from 'react'
import axios from "axios"
import { Form, Header, Button, } from "semantic-ui-react"

class CategoryForm extends React.Component {
  state = { name: "", image: "", categories: []  }

// pull any other added categories
  componentDidMount() {
    axios.get("/api/categories")
    .then( res => {
      this.setState({ categories: [ res.data], });
    })
    .catch( err => {
      console.log(err)
    })
  }

// on submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.addItem(this.state.name, this.state.image)
    this.setState({ name: "", image: "", })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  }

  // add to API and reset state
  addItem = (name, image) => {
    axios.post('/api/categories', { name, image })
    .then( res => {
        const { categories, } = this.state
        this.setState({ categories: [...categories, res.data], })
      })
  }

  // delete function
  deleteCategory = (id) => {
    axios.delete(`/api/categories/${id}`)
      .then( res => {
        const { categories, } = this.state;
        this.setState({ categories: categories.filter(c => c.id !== id), })
      })
  }
//  render list of categories on same page
 renderCategory() {
   return this.state.categories.map(c => (
     <div>
       <ul>
         <li>
           {c.name}
           <Button onClick={ () => this.deleteCategory(c.id)}>Delete</Button>
         </li>
       </ul>
     </div>
   ))
 }

// actual return
  render() {
    return (
      <>
      <div>
        <Header as="h1">New Category</Header>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Category"
          placeholder="Add A Category"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />

       <Form.Input
          label="Image"
          placeholder="Add a URL"
          required
          value={this.state.image}
          onChange={this.handleChange}
        />
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
       {this.renderCategory() }
      </>
    )
  }
}



export default CategoryForm



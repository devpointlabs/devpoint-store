import React from 'react';
import axios from "axios";
import { Form, Header, } from "semantic-ui-react";

class CategoryForm extends React.Component {
  state = { name: "", categories: [], }

  componentDidMount() {
    axios.get("/api/categories")
    .then( res => {
      this.setState({ categories: res.data, });
    })
    .catch( err => {
      console.log(err)
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.addItem(this.state.name)
    this.setState({ name: "", })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  }

  addItem = (name) => {
    axios.post('/api/categories', { name })
    .then( res => {
      debugger
        const { categories, } = this.state
        this.setState({ categories: [...categories, res.data], })
      })
  }

 renderCategory() {
   return this.state.categories.map(c => (
     <div>
       <ul>
         <li>
           {c.name}
         </li>
       </ul>
     </div>
   ))
 }

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
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
       {this.renderCategory() }
      </>
    )
  }
}



export default CategoryForm



import axios from 'axios'
import React from 'react';
import { Form, Card, Button, Grid } from 'semantic-ui-react'




//   componentDidMount() {
//     axios.get(`/api/categories/${this.props.match.params.id}/items`)
//     .then( res => {
//       this.setState({ items: res.data })
//     })
//   }

//   renderItems = () => (
//     this.state.items.map( i => {
//       return <p>{i.name}</p>
//     })
//   )

//   handleChange = (e) => {
//     const { target: { name, value } } = e
//     this.setState({ [name]: value })
//   }
  
// //e.currentTarget.id
//   handleDropdown = (e) => {
//     this.setState({category_id: e.currentTarget.id})
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     const { name, price, desc, } = this.state
//     const item = { name, price, desc, }
//     const { id, category_id, } = this.props
//     if (id && category_id) {
//       axios.put(`/api/categories/${category_id}/items/${id}`, item)
//         .then(res => {
//           this.props.update(res.data)
//         })
//       this.props.close()
//     } else {
//       axios.post(`/api/categories/${this.props.match.params.id}/items`, item)
//         .then(res => {
//           //clear the form function or redirect to itemView or custom component 
//         })
//     }
//     // /api/categories/:category_id/items(.:format)
//   }

//   CategoryOptions = [
//     { key: 1, text: 'tShirts', value: 'TShirts', id: 1 },
//     { key: 2, text: 'Hoodies', value: 'Hoodies', id: 3 },
//     { key: 3, text: 'Hats', value: 'Hats', id: 2 },
//     { key: 4, text: 'Stickers', value: 'Stickers', id: 4 },
//   ]


//   renderDropDown = () => {
//     const itemOptions = this.state.items.map(item => ({
//       key: item.id,
//       text: item.name,
//       value: item.name,
//       id: item.id
//     })
//     )
//     return itemOptions
//   }


//   render() {
//     const { name, desc, price, image, } = this.state
//     return (
//       <>
//         <h1 style={view}>New Item</h1>
//         <Form onSubmit={this.handleSubmit} style={view}>
//           <Form.Group>
//             <Form.Input
//               name='name'
//               placeholder='Item Name'
//               autoFocus
//               value={name}
//               onChange={this.handleChange}
//             />
//             <Form.Input
//               name='price'
//               placeholder='Item Price'
//               value={price}
//               onChange={this.handleChange}
//             />
//             <Form.Input
//               name='desc'
//               placeholder='Item Description'
//               value={desc}
//               onChange={this.handleChange}
//             />
//             <Form.Input
//               name='image'
//               placeholder='Image URL'
//               value={image}
//               onChange={this.handleChange}
//             />
//             <br />
//             <Form.Button color="blue" style={view}>
//               Submit
//           </Form.Button>
//           </Form.Group>
//         </Form>
//         <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

      
//         {this.renderItems()}
       
//       </>
//     )
//   }
// }


// const view  = {
//   display: "flex",
//   justifyContent: "center"
// }

class ItemForm extends React.Component {
  state = {category_id:'',name:'',price:'',desc:'', image:'', items: [], categories: [] }


componentDidMount() {
  axios.get('/api/all_items')
    .then(res => {
      this.setState({ items: res.data })
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.responce)
    })
		axios
			.get("/api/categories")
			.then(response => {
				this.setState({ categories: response.data });
			})
			.catch(err => {
				console.log(err);
			})
}

  handleSubmit = (e) => {
    debugger
    e.preventDefault()
    const { name, desc, price, image, category_id } = this.state
    this.addItem( name, desc, price, image, category_id)

  }

  addItem = (name, desc, price, image, category_id) => {

		axios.post(`/api/categories/${category_id}/items`, { name, desc, price, image, category_id }).then(res => {

      const item = { name, desc, price, image, category_id }
      this.setState({ items: [...this.state.items, res.data] })

		});
	};

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

   itemdelete = (id, c_id) => {
     debugger
		axios.delete(`/api/categories/${c_id}/items/${id}`)
		.then( res => {
      this.setState({items: this.state.items.filter( i => i.id !== id) })
  })
}

  renderItem() {
    const { items, } = this.state
    return items.map(i => (
      <div style={{ margin: '0 auto'}}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Card>
          <div>
            <ul style={view}>
              <li style={view}>
                {i.name}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </li>
            </ul>
            <center>
              <Button color="red" onClick={() => this.itemdelete(i.id, i.category_id)}>
                Delete
          </Button>
            </center>
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </Card>
      </div>
    ));
  }

  renderDropDown = () => {
    const itemOptions = this.state.categories.map(c => ({
      key: c.id,
      text: c.name,
      value: c.name,
      id: c.id
    })
    )
    return itemOptions
  }
  handleDrop = (e) => {
    this.setState({ category_id: e.currentTarget.id })
  }

render() {
  const { name, desc, price, image, } = this.state
  return (
    <>

          
            <h1 style={view}>New Item</h1>
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
                <Form.Button color="blue" onClick={() => window.location.reload() } >
                  Submit
              </Form.Button>
              </Form.Group>
            </Form>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br /><br />
					<center>
						<Grid.Column>
							<Grid columns={4}
								align="center"
								style={view}
							>
		   {this.renderItem() }
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


export default ItemForm;

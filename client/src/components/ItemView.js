import axios from 'axios'
import React from 'react'

class ItemView extends React.Component {
  state = { items: [] }

  componentDidMount() {
    axios.get('/api/items/${id}')
    .then( res => {
      this.setState( this.state.items )
    })
  }

  render() {
    return (
      <div>
        Item View Page
      </div>
    )
  }
}

export default ItemView

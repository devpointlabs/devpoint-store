import React from 'react'

class ItemView extends React.Component {
  state = { }

  componentDidMount() {
    axios.get('/api/items/${id}')
    .then( res => {
      this.setState
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

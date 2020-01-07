import React from "react"
import axios from "axios"

class CategoryView extends React.Component {
  state = {  category: {},   }


  componentDidMount() {
    const {id } = this.props.match.params
    axios.get(`/api/categories/${id}`)
    .then( res => {
      this.setState({ category: [res.data], });
    })
    .catch( err => {
      console.log(err)
    })
  }



  render() {
    return (
      <div>{this.state.category.name} </div>
    )
  }
}

export default CategoryView;
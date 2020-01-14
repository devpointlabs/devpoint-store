import React from "react"
import axios from "axios"
import {  Container, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import '../styles/home.css'

class Home extends React.Component {
  state = {  categories: [ ] }

  componentDidMount() {
    axios.get("/api/categories")
    .then( res => {
      this.setState({ categories: [ ...res.data], });
    })
    .catch( err => {
      console.log(err)
    })
  }

  renderImages = () => {
    return this.state.categories.map(c => {
      if (c.full_width) {
    return(
    
    <Card id='card1'>
    <Card.Content>
      <Link to={`/categories/${c.id}`}  >
        <Image src={c.image} id='shirtpic'/>
        <h1 id='shirty'>T-Shirt</h1>
      </Link>
      </Card.Content>
    </Card>    
    )}
  })
}

  renderImagessmall = () => {
    
    return this.state.categories.map(c => {
      if (c.full_width === false)
    return(
    
      <Card>
       <Card.Content>
         <Link to={`/categories/${c.id}`}  >
          <Image src={c.image} id='restimages'/>
           <h1 id='shirty'>{c.name}</h1>
         </Link>
        </Card.Content>
      </Card>  
    )
  })
}

  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={1}>  
          {this.renderImages()}
        </Card.Group>
        <Card.Group itemsPerRow={2}>
          {this.renderImagessmall()}
        </Card.Group>
      </Container>
)}}



export default Home



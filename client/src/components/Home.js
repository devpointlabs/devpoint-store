import React from "react"
import axios from "axios"
import {  Container, Card, Image, Grid } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import '../styles/home.css'




class Home extends React.Component {
  state = {  categories: [ ]  }

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
        <Link to={`/categories/${c.id}`} >
         <Image src={c.image} id='shirtpic'/>
           <div id="shadow1"></div>
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
       <Card.Content >                 
         <Link to={`/categories/${c.id}`} >
          <Image  src={c.image} id='restimages'/>
            <div id="shadow"></div>
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
       
        <div class="stacking cards">
        <Card.Group itemsPerRow={2}  >
          {this.renderImagessmall()}
        </Card.Group>
        </div>
      </Container>

)}}



export default Home



import React from "react"
import axios from "axios"
import {  Container, Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import tshirt from './Images/tshirt.png'
import hoodie from './Images/hoodie.png'
import hats from './Images/hats.png'
import stickers from './Images/stickers.png'
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

  renderPrimaryCategory() {
    return this.state.categories.map(c => (
      <div>
        {c.name}
      </div>
    ))
  }
  
  renderCategories() {
    return this.state.categories.map(c => (
      <>
      <Card.Group itemsPerRow={1}>
      <Card>
        <Card.Content>
          <Link to={`/categories/${c.id}`}  >
            <Image src={c.image} id='shirtpic'/>
          </Link>
        </Card.Content>
      </Card>
    </Card.Group>
    
    {/* <Card.Group itemsPerRow={2}>
      <Card>
        <Card.Content>
          <Link to={`/categories/c.id`}  >
            <Image src={hoodie} id='hoodiepic'/>
          </Link>
        </Card.Content>
      </Card>

    </Card.Group> */}
    </>
    ))
  }

  render() {
    return (
      <Container>


          {this.renderCategories()}


        </Container>

)}}

export default Home



import React from "react"
import axios from "axios"
import {  Container, Card, Image } from 'semantic-ui-react'
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

  renderImages = () => (
    <>
      <Card.Group itemsPerRow={1}>      
        // 1) map and only return full_width items
      </Card.Group>
      <Card.Group itemsPerRow={2}>  
        // 2) map and only return !full_width items
      </Card.Group>
    </>



    // return this.state.categories.map(c => {
    //   { c.full_width ?
    //     this.renderPrimaryCategory(c)
    //     :
    //     this.renderCategories(c)
    //   }
  
  
    // })
  )
      
      
      renderPrimaryCategory(c) {
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
      </>
    ))
  }
  
  renderCategories = (c) => (
    <Card.Group itemsPerRow={2}>
      <Card>
        <Card.Content>
          <Link to={`/categories/${c.id}`}  >
            <Image src={c.image} id='shirtpic'/>
          </Link>
        </Card.Content>
      </Card>
    </Card.Group>      
  )



  render() {
    return (
      <Container>


          {this.renderImages()}
          


        </Container>

)}}

export default Home



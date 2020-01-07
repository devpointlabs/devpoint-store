import React from "react"
import axios from "axios"
import {  Grid, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import tshirt from './Images/tshirt.png'
import hoodie from './Images/hoodie.png'
import hats from './Images/hats.png'
import stickers from './Images/stickers.png'


class Home extends React.Component {
  state = {  categories: [ ]  }

  componentDidMount() {
    axios.get("/api/categories")
    .then( res => {
      this.setState({ categories: [ res.data], });
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    return (
    
      <Grid centered columns={1}>
      <Grid.Column  >
    <Link to={`/categories/c.id`}  >
        <Image src={tshirt}
        style={{
          height: '500px',
          width: '1200px',
          boxShadow: '10px 10px 5px grey',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        />
    </Link>
      </Grid.Column>
    
       <Grid.Row centered columns={3}>
          <Grid.Column>
        <Link to={`/categories/2`}>
            <Image src={hats}
              style={{
               height: '500px',
               width: '600px',
                boxShadow: '10px 10px 5px grey',
               }} />
          </Link>
           </Grid.Column>
        <Grid.Column>
        <Link to={`/categories/3`}>
          <Image src={hoodie}
            style={{
              height: '500px',
              width: '600px',
              boxShadow: '10px 10px 5px grey',
            }} />
            </Link>
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row centered columns={3}>
        <Grid.Column>
        <Link to={`/categories/4`}>
          <Image src={stickers}
          style={{
            height: '500px',
            width: '600px',
            boxShadow: '10px 10px 5px grey',
          }}  />
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)
    
  }
}
       
      
export default Home



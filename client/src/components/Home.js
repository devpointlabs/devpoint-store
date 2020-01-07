import React from "react"
import {  Grid, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import tshirt from './Images/tshirt.png'
import hoodie from './Images/hoodie.png'
import hats from './Images/hats.png'
import stickers from './Images/stickers.png'




class Home extends React.Component {
  render() {
    return (
    
      <Grid centered columns={1}>
      <Grid.Column  >
    <Link to={`ItemView`}>
        <Image src={tshirt}
        style={{
          height: '350px',
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
        <Link to={`ItemView`}>
            <Image src={hats}
              style={{
               height: '400px',
               width: '500px',
                boxShadow: '10px 10px 5px grey',
               }} />
          </Link>
           </Grid.Column>
        <Grid.Column>
        <Link to={`ItemView`}>
          <Image src={hoodie}
            style={{
              height: '400px',
              width: '500px',
              boxShadow: '10px 10px 5px grey',
            }} />
            </Link>
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row centered columns={3}>
        <Grid.Column>
        <Link to={`ItemView`}>
          <Image src={stickers}
          style={{
            height: '400px',
            width: '400vw',
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



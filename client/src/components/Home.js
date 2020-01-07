import React from "react"
import {  Card, Image, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import shirt from './Images/shirt.png'
import hat from './Images/hat.png'
import mug from './Images/mug.png'
import hoodie from './Images/hoodie.png'
import styled from 'styled-components'
import ItemForm from './ItemForm'


 class Home extends React.Component {
  render() {
    return (
      // <Page>

      // <Header style={{
      //           fontSize: "75px",
      //           fontFamily: "Luminari, fantasy",
      //           textShadow: "2px 3px #3299a8",
      //           height: '80px',
      //           display: 'flex',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //           position:'absolute, center',
      //           color: '#e0d1b8',
      //         }}>

      // Swag

        

      //   </Header>

      // <br/>
      // <br/>
      // <br/>
      // <>
      // <Card.Group itemsPerRow="5">
      //   <Link to={`/ItemView`}>
      //   <Card style={{
      //           display: 'flex',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //         }}>
      //         <Image
      //           style={{
      //             height: '320px',
      //             width: '300px',
      //           }}
              
      //       Image src={shirt} alt="Shirt" />

          
      //     <Card.Content>
              
      //     T-Shirt

      //     </Card.Content>
      //     <Card.Content extra>
      //       $25
      //     </Card.Content>

      //   </Card>
      //   </Link>

      //   <Link to={`/ItemView`}>
      //   <Card style={{
      //           display: 'flex',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //         }}>
      //         <Image
      //           style={{
      //             height: '320px',
      //             width: '300px',
      //           }}
              
      //       Image src={hat} alt="Hat" />
      //     <Card.Content>
      //       Hat

      //     </Card.Content>
      //     <Card.Content extra>
      //       $25
      //     </Card.Content>

      //   </Card>
      //   </Link>

      //   <Link to={`/ItemView`}>
      //   <Card style={{
      //           display: 'flex',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //         }}>
      //         <Image
      //           style={{
      //             height: '320px',
      //             width: '300px',
      //           }}
              
      //       Image src={mug} alt="Mug" />
      //     <Card.Content>
      //     Mug

      //     </Card.Content>
      //     <Card.Content extra>
      //       $15
      //     </Card.Content>

      //   </Card>
      //   </Link>


      //   <Link to={`/ItemView`}>
      //   <Card style={{
      //           display: 'flex',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //         }}>
      //         <Image
      //           style={{
      //             height: '320px',
      //             width: '300px',
      //           }}
              
      //       Image src={hoodie} alt="Hoodie" />
      //     <Card.Content>
      //       Hoodie

      //     </Card.Content>
      //     <Card.Content extra>
      //       $50
      //     </Card.Content>

      //   </Card>
      //   </Link>
      //   <Link to={`/ItemView`}>
      //   <Card style={{
      //           display: 'flex',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //         }}>
      //         <Image
      //           style={{
      //             height: '320px',
      //             width: '300px',
      //           }}
              
      //       Image src={shirt} alt="Shirt" />
      //     <Card.Content>
      //     T-Shirt

      //     </Card.Content>
      //     <Card.Content extra>
      //       $25
      //     </Card.Content>

      //   </Card>
      //   </Link>

      //   <Link to={`/ItemView`}>
      //   <Card style={{
      //           display: 'flex',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //         }}>
      //         <Image
      //           style={{
      //             height: '320px',
      //             width: '300px',
      //           }}
              
      //       Image src={hat} alt="Hat" />
      //     <Card.Content>
      //       Hat

      //     </Card.Content>
      //     <Card.Content extra>
      //       $25
      //     </Card.Content>

      //   </Card>
      //   </Link>

      //   <Link to={`/ItemView`}>

      //   <Card style={{
      //           display: 'flex',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //         }}>
      //         <Image
      //           style={{
      //             height: '320px',
      //             width: '300px',
      //           }}
              
      //       Image src={mug} alt="Mug" />
      //     <Card.Content>
      //     Mug

      //     </Card.Content>
      //     <Card.Content extra>
      //       $15
      //     </Card.Content>

      //   </Card>
      //   </Link>

      //   <Link to={`/ItemView`}>

      //   <Card style={{
      //           display: 'flex',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //         }}>
      //         <Image
      //           style={{
      //             height: '320px',
      //             width: '300px',
      //           }}
              
      //       Image src={hoodie} alt="Hoodie" />
      //     <Card.Content>
      //       Hoodie

      //     </Card.Content>
      //     <Card.Content extra>
      //       $50
      //     </Card.Content>

      //   </Card>
      //   </Link>
      // </Card.Group>

      

      // </>
      // </Page>
      <ItemForm/>
    )
  }
}

const Page = styled.div`
  /* padding-left:120px; */
  padding-left: 140px;
  padding-right: 90px;
`





export default Home;


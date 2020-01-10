import React, { useState, } from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link, withRouter } from 'react-router-dom'
import { Button, Icon, Dropdown, } from "semantic-ui-react";
import '../App.css';
import styled from "styled-components";


const Navbar = (props) => {
  const [selection, setSelection] = useState('')

  const menuOptions = [
    { key: 1, text: 'Hats', value: 'Hats' },
    { key: 2, text: 'Stickers', value: 'Stickers' },
    { key: 3, text: 'Contact', value: 'Contact' },
    { key: 4, text: 'Register', value: 'Register' },
    { key: 5, text: 'Login', value: 'Login' },
  ]

  const handleChange = (e, { value, }, ) => setSelection(value)

  const userOptions = () => {
    switch (selection) {
      case 'Contact':
        props.history.push('/Contact')
        setSelection('')
        break;
      case "Register":
        props.history.push('/Register')
        setSelection('')
        break;
      case "Login":
        setSelection('')
        props.history.push('/login')
        break;
      case "Hats":
        setSelection('')
        props.history.push('/categories/2')
        break;
      case "Stickers":
        setSelection('')
        props.history.push('/categories/4')
        break;
      }
  }

  const rightNavItems = (auth) => {
    if (auth.user) {
      return (
        <>
          <header>
            <Nav>
              <h3>
                <div
                  style={cust}
                  name='logout'
                  onClick={() => auth.handleLogout(props.history)}
                />
              </h3>
            </Nav>
          </header>
        </>
      )
    } else {
      return (
        <>
          <Nav>
            <div>
              <Button style={cust}>
                <Link to='/login'>
                  <h3>
                    <Nav
                      active={props.location.pathname === '/login'} />
                  </h3>login
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='register' >
                  <h3 >
                    <div
                      active={props.location.pathname === '/register'}
                    />register
                  </h3>
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='categories/2'>
                  <h3>
                    <Nav
                      active={props.location.pathname === '/categories/2'} />
                  </h3>Hats
                </Link>
              </Button>
            </div>
          </Nav>
        </>
      )
    }
  }
  return (
    <AuthConsumer>
      {auth => (
        <Nav>
          <div>
            <div style={home}>
              <Link to="/">
                <div>
                  <img
                    src="https://media.licdn.com/dms/image/C510BAQEaODeG-ziDdQ/company-logo_200_200/0?e=2159024400&v=beta&t=aHik_r9QdKRvn_OC_Ng1e-O0G9f58i-DiHsgmu81FhI"
                    height="55"
                    width="55"
                    class="navbar"
                  >
                  </img> .Shop( )
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div style={cust}>
              <div>
                <Link to='/'>
                  <h3>
                    <Nav
                    />
                    All products</h3>
                </Link>
              </div>
              <div>
                <Link to='/categories/1'>
                  <h3>
                    <Nav
                    />
                    T-Shirts</h3>
                </Link>
              </div>
              <div>
                <Link to='/categories/3'>
                  <h3>
                    <Nav
                    />
                    Hoodies</h3>
                </Link>
              </div>
              <Dropdown text='Menu'
                as="h3"
                placeholder='More'
                options={menuOptions}
                onChange={handleChange}
                value={selection}
                simple item
              />
              {selection != '' ? userOptions() : null}
              <div>
                <Link to="/Cart">
                  <h3>
                    <Icon name='cart arrow down'>
                    </Icon>Cart
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </Nav>
      )}
    </AuthConsumer>
  )
}

const Nav = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
  display: flex;
  color: black;
  fontSize: 30px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`
const cust = {
  paddingTop: '105px',
  backgroundColor: 'white',
  fontColor: 'black',
  fontSize: '30px',
  justifyContent: 'spaceBetween',
  paddingRight: '100px',
  display: 'flex',
  justifyContent: 'flexEnd'
}

const home = {
  backgroundColor: 'white',
  paddingTop: '60px',
  paddingLeft: '85px',
  color: 'black',
  fontSize: '30px'
}

const text = {
  color: 'black',
}

export default withRouter(Navbar)


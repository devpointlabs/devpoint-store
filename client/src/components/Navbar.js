import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link, withRouter } from 'react-router-dom'
import { Button, Icon } from "semantic-ui-react";
import '../App.css';
import styled from "styled-components";


const Navbar = (props) => {

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
                <Link to='/register' >
                  <h3 >
                    <div
                      active={props.location.pathname === '/register'}
                    />register
                  </h3>
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
            <Button style={home}>
              <Link to="/">
                <div>
                  <img
                    src="https://media.licdn.com/dms/image/C510BAQEaODeG-ziDdQ/company-logo_200_200/0?e=2159024400&v=beta&t=aHik_r9QdKRvn_OC_Ng1e-O0G9f58i-DiHsgmu81FhI"
                    height="70"
                    width="90"
                    class="navbar"
                  >
                  </img> .Shop()
                </div>
              </Link>
            </Button>
          </div>
          <div>
            <div>
              <Button style={cust}>
                <Link to="/Contact">
                  <div>
                    <h3>Contact</h3>
                  </div>
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='/register' >
                  <h3 >
                    <div
                      active={props.location.pathname === '/register'}
                    />Register
                    </h3>
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='/login'>
                  <h3>
                    <Nav
                      active={props.location.pathname === '/login'} />
                    Login</h3>
                </Link>
              </Button>
              <Button>
                <h4>
                  <Icon
                    name="caret down">
                  </Icon>
                  More
                </h4>
              </Button>
              <Button style={cust}>
                <Link to="/Cart">
                  <h3>
                    <Icon name='cart arrow down'>
                      Cart</Icon>
                  </h3>
                </Link>
              </Button>
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
  paddingTop: '125px',
  backgroundColor: 'white',
  color: 'black',
  fontSize: '30px',
  justifyContent: 'right',
  direction: 'rtl',
  textAlign: 'right',
  flexStart: 'right',
  alignItems: 'right',
  position: 'right',
  positionRight: '100px',
  flex: 'right',
}

const home = {
  backgroundColor: 'white',
  paddingTop: '70px',
  paddingLeft: '85px',
  color: 'black',
  fontSize: '30px'

}

const left = {
  paddingleft: '350',

}


export default withRouter(Navbar)


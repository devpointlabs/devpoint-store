import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon, Button } from "semantic-ui-react";

const Navbar = (props) => {

  const rightNavItems = (auth) => {
    if (auth.user) {
      return (
        <>
          <Menu.Menu position='right' >
            <h3>
              <Menu.Item
                name='logout'
                onClick={() => auth.handleLogout(props.history)}
              />
            </h3>
          </Menu.Menu>
        </>
      )
    } else {
      return (
        <>
          <Menu.Menu position='right'>
            <Button style={otherBTN}>
              <Link to='/login'>
                <h3>
                  <Menu.Item
                    id='login'
                    name='login'
                    active={props.location.pathname === '/login'} />
                </h3>
              </Link>
            </Button>

            <Button style={otherBTN}>
              <Link to='/register' >
                <h3>
                  <Menu.Item
                    id='register'
                    name='register'
                    active={props.location.pathname === '/register'}
                  />
                </h3>
              </Link>
            </Button>

          </Menu.Menu>
        </>
      )
    }
  }
  return (
    <AuthConsumer>
      {auth => (
        <Menu>
          <div class="btn">
            <Button>
              <Link to="/">
                <Menu.Item style={btn}>
                  <img
                    src="https://media.licdn.com/dms/image/C510BAQEaODeG-ziDdQ/company-logo_200_200/0?e=2159024400&v=beta&t=aHik_r9QdKRvn_OC_Ng1e-O0G9f58i-DiHsgmu81FhI"
                    height="60"
                    width="100"
                  >
                  </img>DevPoint Labs
                </Menu.Item>
              </Link>
            </Button>
          </div>
          <Menu.Menu position="right" >
            <Button style={otherBTN}>
              <Link to="/Cart">
                <Menu.Item >
                  <h3>Cart</h3>
                </Menu.Item>
              </Link>
            </Button>
            <Button style={otherBTN}>
              <Link to="/Contact">
                <Menu.Item>
                  <h3>Contact</h3>
                </Menu.Item>
              </Link>
            </Button>
            {rightNavItems(auth)}
          </Menu.Menu>
        </Menu>
      )}
    </AuthConsumer>
  )
}

const btn = {
  background: 'white',
  paddingLeft: '40px',
  paddingTop: '45px',
  paddingColor: 'white',
  paddingRight: '25px',
  paddingBottom: '20px'
}

const otherBTN = {
  paddingTop: '45px',
}
export default withRouter(Navbar)


import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon, Button } from "semantic-ui-react";

const Navbar = (props) => {

  const rightNavItems = (auth) => {
    if (auth.user) {
      return (
        <>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              onClick={() => auth.handleLogout(props.history)}
            />
          </Menu.Menu>
        </>
      )
    } else {
      return (
        <>
          <Menu.Menu position='right'>
            <Link to='/login'>
              <Menu.Item
                id='login'
                name='login'
                active={props.location.pathname === '/login'}
              />
            </Link>
            
            <Link to='/register'>
              <Menu.Item
                id='register'
                name='register'
                active={props.location.pathname === '/register'}
              />
            </Link>
          </Menu.Menu>
        </>
      )
    }
  }

  return (
    <AuthConsumer>
      {auth => (
        <Menu pointing secondary>
          <Button class="button">
            <Link to='/'>
              
                <img alt="build diagram" src="https://www.devpointlabs.com/static/media/Beaker-purple.c898b23f.png" width="40" height="40"></img>
                <Menu.Item
                // name='home'
                id='home'
                active={props.location.pathname === '/'}
              />
                {/* <Icon name="home"></Icon> */}
            
            </Link>
          </Button>

          <Button class="button">
            <Link to="/Cart">
              <Menu.Item>
                <h3><Icon name="cart arrow down"></Icon>Cart</h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button class="button">
            <Menu.Item>
              <Link to="/Contact">
                <h3><Icon name="phone"></Icon>Contact</h3>
              </Link>
            </Menu.Item>
          </Button>
          {rightNavItems(auth)}
        </Menu>
      )}
    </AuthConsumer>
  )
}

export default withRouter(Navbar)


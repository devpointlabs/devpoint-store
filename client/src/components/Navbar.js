import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from "semantic-ui-react";

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
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={props.location.pathname === '/'}
            />
          </Link>
          
            <Link to="/Cart">
              <Menu.Item>
                <h1><Icon name="cart arrow down"></Icon>Cart</h1>
              </Menu.Item>
            </Link>
          
            <Link to="/Contact">
              <Menu.Item>
                <h1><Icon name="phone"></Icon>Contact</h1>
              </Menu.Item>
            </Link>
            {rightNavItems(auth)}
          

        </Menu>
      )}
    </AuthConsumer>
  )
}

export default withRouter(Navbar)


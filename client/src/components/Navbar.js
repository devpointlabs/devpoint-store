import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Button, Icon } from "semantic-ui-react";

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
            <Button class="ui button" size='tiny'>
             <h3><Link to='/login'>
                <Menu.Item
                  id='login'
                  name='login'
                  active={props.location.pathname === '/login'}
                />
              </Link></h3>
            </Button>
            <Button class="ui button" size='tiny'>
              <h3><Link to='/register'>
                <Menu.Item
                  id='register'
                  name='register'
                  active={props.location.pathname === '/register'}
                />
              </Link></h3>
            </Button>
          </Menu.Menu>
        </>
      )
    }
  }

  return (
    <AuthConsumer>
      {auth => (
        <Menu pointing secondary>
          <Button class="ui button">
            <Link to='/'>
              <h3>
                <Menu.Item
                name='home'
                id='home'
                active={props.location.pathname === '/'}
              />
                {/* <Icon name="home"></Icon> */}
              </h3>
            </Link>
          </Button>

          <Button class="ui button" size='Big'>
            <Link to="/Cart">
              <Menu.Item>
                <h3><Icon name="cart arrow down"></Icon>Cart</h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button class="ui button" size='Big'>
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


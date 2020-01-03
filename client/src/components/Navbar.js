import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {

  const rightNavItems = (auth) => {
    if (auth.user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
          name='logout'
          onClick={ ()=> auth.handleLogout(props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
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
        )
      }
    }

      return (
        <AuthConsumer>
          { auth => (
            <Menu pointing secondary>
              <Link to='/'>
                <Menu.Item
                name='home'
                id='home'
                active={props.location.pathname === '/'}
                />
              </Link>
              { rightNavItems(auth) }
            </Menu>
        )}
        </AuthConsumer>
      )
    }

export default withRouter(Navbar)
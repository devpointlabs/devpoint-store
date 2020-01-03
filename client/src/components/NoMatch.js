import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const NoMatch = () => (
  <Header as='h3' textAlign='center'>
    Page not found.
    Go back to <Link to='/'> Shop </Link>
  </Header>
)

export default NoMatch
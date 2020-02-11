import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import { Link, Redirect, } from 'react-router-dom';

const PaymentSuccess = ({ location: { state, }, }) => {
  debugger
  if(state && state.transactionId)
    return(
      <Segment basic textAlign='center'>
        <Header as='h1' color='green'>Thank You For Your Purchase!</Header>
        <h3>You have been successfully charged: ${state.amount.toFixed(2)}</h3>
        <h3>Your Transcation Id is: {state.transactionId}</h3>
        <br />
        <Link to='/'>
          <Button as='h3' color='blue' size='medium'>
            Back to Shop
          </Button>
        </Link>
      </Segment>
    )
  else
    return(<Redirect to='/' />);
}

export default PaymentSuccess;
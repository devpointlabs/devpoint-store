import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class Contact extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          <Form.Field
            control={Input}
            label='email'
            placeholder='email'
          />
          <Form.Field
            control={Input}
            label='Phone Number'
            placeholder='Phone number'
          />

        </Form.Group>
        
        <Form.Field
          control={TextArea}
          label='Message'
          placeholder='Tell us more about whats going on'
        />

        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      <hr />
      </>
      
    )
    
  }
}


export default Contact
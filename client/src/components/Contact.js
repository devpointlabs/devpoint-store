import React, { useState } from "react"
import axios from "axios"
import { Form } from "semantic-ui-react"
import styled from "styled-components"
import { StyledButton, StyledHeader } from "../styles/shared"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .get(
        `/api/contact?name=${name}&email=${email}&subject=${subject}&message=${message}`
      )
      .then(res => {
        console.log("email sent")
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      })
  };

  return (
    <>
      <StyledHeader as="h1">Contact Us</StyledHeader>
      <br />
      <Form onSubmit={handleSubmit}>
        <StyledInput
          label="Name"
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <StyledInput
          label="Email"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <StyledInput
          label="Subject"
          placeholder="Subject"
          type="text"
          name="subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <StyledTextArea
          label="Message"
          placeholder="Message"
          type="text"
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </Form>
    </>
  );
};
const StyledInput = styled(Form.Input)`
  & > label {
    color: white !important;
    font-family: "Audiowide", cursive;
  }
  & > div {
    & > input {
      background: #1c1c1d !important;
      color: white !important;
    }
  }
`;

const StyledTextArea = styled(Form.TextArea)`
  & > label {
    color: white !important;
    font-family: "Audiowide", cursive;
    & > textarea {
      background: #1c1c1d !important;
      height: 200px;
      color: white !important;
    }
  }
`;

export default Contact

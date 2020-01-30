import styled from "styled-components"
import { Header } from "semantic-ui-react"

export const StyledHeader = styled(Header)`
  font-size: ${props => (props.title ? "3rem" : "2rem")};
  color: white !important;
  font-family: "Audiowide", cursive;
  letter-spacing: 3px;
  text-align: ${props => (props.centered ? "center" : "none")};
`;

export const StyledButton = styled.button`
  background: #1c1c1d;
  padding: 15px 35px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'open-sans';
  outline: none;
  transition: background 0.2s ease;

  &:hover {
    /* background: #1c1c1da3; */
    transition: background 0.2s ease;
  }
`;

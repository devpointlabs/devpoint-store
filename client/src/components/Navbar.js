import { Link } from "react-router-dom";
import { Menu, Button, Icon } from "semantic-ui-react";
import React from "react";

const Navbar = () => (
  <menu>
    <Button class="ui button" size='massive'>
      <Link to="/">
        <Menu.Item>
          <h1>Home</h1>
        </Menu.Item>
      </Link>
    </Button>
    <Button class="ui button" size='massive'>
    <Link to="/Cart">
      <Menu.Item>
        <h1><Icon name="cart arrow down"></Icon>Cart</h1>
      </Menu.Item>
    </Link>
    </Button>
    <Button class="ui button" size='massive'>
    <Link to="/Contact">
      <Menu.Item>
        <h1>Contact</h1>
      </Menu.Item>
    </Link>
    </Button>
  </menu>
);

export default Navbar;
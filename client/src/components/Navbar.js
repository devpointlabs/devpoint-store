import { Link } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";
import React from "react";

const Navbar = () => (
  <menu>
    <Link to="/">
      <Menu.Item>
        <h3>Home</h3>
      </Menu.Item>
    </Link>
    <Link to="/Cart">
      <Menu.Item>
        <h3>Cart</h3>
      </Menu.Item>
    </Link>
    <Link to="/Contact">
      <Menu.Item>
        <h3>Contact</h3>
      </Menu.Item>
    </Link>
  </menu>
);

export default Navbar;
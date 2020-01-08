import React from "react";
import Devlogo from "./Images/devlabLogo.png";

class Footer extends React.Component {
  render() {
    return (
      <div
        class="ui inverted vertical footer segment"
        style={{
          fontSize: "75px",
          height: "60px",
          backgroundColor: "#121212",
          width: "100vw",
          bottom: "0",
          display: "flex",
          position: 'static',
          left: "0",
          alignItems: 'center'
            }}>
        
            <img
            src={Devlogo} style={{height: '150px'}}
            />
            <h4
            class="ui center aligned inverted header"
            style={{ color: "white" }}>

            370 S. 300 E. SLC, Utah 84111 / 801-448-7240 /
            contact@devpointlabs.com
            </h4>
        </div>
    );
  }
}

export default Footer;

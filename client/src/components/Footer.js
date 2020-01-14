import React from "react";
import Devlogo from "./Images/devlabLogo.png";

class Footer extends React.Component {
  render() {
    return (
      <>
      <div
        class="ui inverted vertical footer segment"
        style={{
          fontSize: "75px",
          height: "40px",
          backgroundColor: "#121212",
          width: '100vw',
          bottom: "0",
          display: "flex",
          position: 'static',
          left: "0",
          alignItems: 'center',
          
          // justifyContent: 'space-around'
            }}>
        
            <img
            src={Devlogo} alt='Devpoint labs' style={{height: '150px',}}
            />
            <h5
            class="ui center aligned inverted header"
            style={{ color: "white" }}>

            370 S. 300 E. SLC, Utah 84111 / 801-448-7240 /
            contact@devpointlabs.com
            </h5>
      </div>
        <div class='ui inverted vertical footer segment' style={{ 
          justifyContent: 'flex-end',
          display: "flex", 
          padding: '10 px',
          
          }} >
          <h5> &copy; 2020 DevPoint labs 
              <a href='https://www.devpointlabs.com/dpl-terms-of-service' 
              target='_blank' style={{ color: "white", }} >  Terms  </a> 
               and  
              <a href='https://www.devpointlabs.com/dpl-privacy-policy' 
                target='_blank'style={{ color: "white", }} >  Policy  </a>
          </h5>
        </div>
        </>
    )
  }
}

export default Footer

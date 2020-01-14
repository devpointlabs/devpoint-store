import React, { useState, useEffect, } from 'react';
import { withRouter, } from 'react-router-dom';
import { AuthConsumer } from '../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { Button, Icon, Dropdown, } from "semantic-ui-react";
import minilogo from '../components/Images/DevPoint_Labs.png'
import styled from "styled-components";
import '../App.css';
import CategoryForm from './CategoryForm';
import axios from 'axios';

const Navbar = (props) => {
  const [selection, setSelection] = useState('')
  const [tShirts, setTshirts] = useState({})
  const [hoodies, setHoodies] = useState({})
  const [hats, setHats] = useState({})
  const [stickers, setStickers] = useState({})

  // const options = categories.map( c => { return { T-shirts: c, Hats: c, Hoodies: c, }} );

  const menuOptions = [
    { key: 1, text: 'Hats', value: 'Hats' },
    { key: 2, text: 'Stickers', value: 'Stickers' },
    { key: 3, text: 'Contact', value: 'Contact' },
    { key: 4, text: 'AdminPage', value: 'Login' },
    { key: 5, text: 'Register', value: 'Register' },
    { key: 6, text: 'Login', value: 'Login' },
  ]

  useEffect(() => {
    axios.get("/api/categories")
      .then(res => {
        setTshirts(res.data[0])
        setHats(res.data[1])
        setHoodies(res.data[2])
        setStickers(res.data[3])
      })
  }, []);

  //delete category
  // deleteCategory = id => {
  //   axios
  //     .delete(`/api/categories/${category_id}/item/${id}`)
  //     .then(res => {
  //       const {categories} = useState;
  //       setSelection({ categories: categories.filter(c => c.id !==id) });
  //     });
  // };

  //this is also needed figure out function

  // getCategories = () =>{
  //   const{ T-shirts, Hats, hoddies} = this.state;
  //   axios.get(`/api/categories/${category}?`)
  //   .then(res =>{
  //     cosnst { categories, } = res.data;
  //     this.ListeningStateChangedEvent({
  //       categories: [... this.state.categories, ...categories],
  //     })
  //   });
  // }

  const handleChange = (e, { value, }, ) => setSelection(value)

  const userOptions = () => {
    //   switch (selection) {
    //     case 'Contact':
    //       props.history.push('/Contact')
    //       setSelection('')
    //       // location.reload();
    //       break;

    //     case "Register":
    //       props.history.push('/Register')
    //       setSelection('')
    //       // location.reload();
    //       break;

    //     case "Login":
    //       props.history.push('/login')
    //       setSelection('')
    //       // location.reload();
    //       break;

    //     case "Hats":
    //       props.history.push('/categories/2')
    //       setSelection('')
    //       // location.reload();
    //       break;

    //     case "Stickers":
    //       props.history.push('/categories/4')
    //       setSelection('')
    //       // location.reload();
    //       break;
    //   }
  }

  // const rightNavItems = (auth) => {
  //   if (auth.user) {
  //     return (
  //       <>
  //         <header>
  //           <div>
  //             <h3>
  //               <div
  //                 style={cust}
  //                 name='/logout'
  //                 onClick={() => auth.handleLogout(props.history)}
  //               />
  //             </h3>
  //           </div>
  //         </header>
  //       </>
  //     );
  //   } 
  //   else {
  //     return (
  //       <>
  //         <div>
  //           <div>
  //             <Button style={cust}>
  //               <Link to='/login'>
  //                 <h3>
  //                   <div
  //                     active={props.location.pathname === '/login'} 
  //                   />
  //                 </h3>
  //               </Link>
  //             </Button>
  //             <Button style={cust}>
  //               <Link to='/register'>
  //                 <h3 >
  //                   <div
  //                     active={props.location.pathname === '/register'}
  //                   />
  //                 </h3>
  //               </Link>
  //             </Button>
  // <Button style={cust}>
  //   <Link to='/categories/2'>
  //     {/* `/categories/${c.id}` */}
  //     <h3>
  //       <div id="2"
  //       />
  //     </h3>
  //   </Link>
  // </Button>
  //           </div>
  //         </div>
  //       </>
  //     )
  //   }
// }

return (
  <AuthConsumer>
    {auth => (
      <div id='whole navbar'>
        <div id='left side navbar'>
          <div style={home}>
            <NavLink
              to="/" exact
              activeClassName="active"
              className="nav-link"
            >
              <div style={text}>
                <img
                  src={minilogo}
                  height="60"
                  width="60"
                  class="navbar"
                />
                .SHOP( )
                </div>
            </NavLink>
          </div>
        </div>

        <div id='right side navbar' style={cust}>
          <div>
            <NavLink
              to='/' exact
            >
              <h3 style={text}>
                <div
                />
                All Products</h3>
            </NavLink>
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

          <div color="black">
            <NavLink to='/categories/1'>
              {/* to={`/categories/${c.id}` */}
              <h3 style={text}>
                T-Shirts
                </h3>
            </NavLink>
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

          <div color="black">
            <NavLink
              to='/categories/3'
            // to={`/categories/${c.id}`}
            >
              <h3 style={text}>
                Hoodies
              </h3>
            </NavLink>
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          {/* {selection != '' ? userOptions() : null} */}
          <div
            style={lift} >
            <Dropdown
              style={text}
              text='More'
              as="h3"
              options={menuOptions}
              onChange={handleChange}
              value={selection}
              simple item
            />
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div>
            <Link
              to="/Cart"
              active={props.location.pathname === '/Cart'}
            >
              <h3 style={text}>
                <Icon
                  name='cart arrow down'>
                </Icon>
                Cart
              </h3>
            </Link>
          </div>
        </div>
      </div>
    )}
  </AuthConsumer>
)
}

const cust = {
  display: 'flex',
  paddingBottom: '55px',
  backgroundColor: 'white',
  color: 'black',
  fontSize: '30px',
  justifyContent: 'flex-End',
  paddingRight: '150px',
}

const home = {
  backgroundColor: 'white',
  paddingTop: '60px',
  paddingLeft: '105px',
  color: 'black',
  fontSize: '27px'
}

const text = {
  color: 'black',
}

const lift = {
  position: 'realitive',
}

export default withRouter(Navbar)

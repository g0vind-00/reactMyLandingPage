import React, { Fragment, useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/Transformerlogo.png'
import './navbar.css'


const Menu = () => (
   <>
      <p><a href="/#home"> Home</a></p>
      <p><a href="/#brand"> Platforms</a></p>
      <p><a href="/#transformer"> Strategies </a></p>
      <p><a href="/#features"> AI for Marketing</a></p>
      <p><a href="/#blog"> Our Approach</a></p>
   </>
)

const Navbar = () => {
   const [toogleMenu, setToggleMenu] = useState(false);

   return (
      <div className="transformer__navbar">
         <div className="transformer__navbar-links">
            <div className="transformer__navbar-links_logo">
               <a href="/">
                  <img src={logo} alt="tranformer logo"></img>
               </a>
            </div>
            <div className="transformer__navbar-links_container">
               <Menu />
            </div>
         </div>
         <div className="transformer__navbar-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
         </div>

         <div className="transformer__navbar-menu">

            {toogleMenu ?
               <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
               : <RiMenu3Fill color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {
               toogleMenu && (
                  <div className="transformer__navbar-menu_container scale-up-center">
                     <div className="transformer__navbar-menu_container-links">
                        <Menu />

                        <div className="transformer__navbar-menu_container-links-sign">
                           <p>Sign in</p>
                           <button type="button">Sign up</button>
                        </div>
                     </div>

                  </div>
               )
            }

         </div>
      </div>
   )
}

export default Navbar

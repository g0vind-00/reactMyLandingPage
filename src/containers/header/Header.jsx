import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

import './header.css'

const Header = () => {
   return (
      <div className="transformer__header section__padding" id="home">
         <div className="transformer__header-content">
            <h1 className="gradient__text">Maximize Your Reach</h1>
            <p>Unlock the power of social media to expand your business.</p>
            <p>Subscribe so you dont miss out on New Marketing Hacks!</p>

            <div className="transformer__header-content__input">
               <input type="email" placeholder="Enter Your Email" />
               <button type="button">Get Started</button>
            </div>

            <div className="transformer__header-content__people">
               <img src={people} alt="transformer people" />
               <p>1,600+ people subscribed in last month</p>
            </div>
         </div>
         <div className="transformer__header-image">
            <figure>
               <img src={ai} alt="transformer ai" />
            </figure>
         </div>
      </div>
   )
}

export default Header

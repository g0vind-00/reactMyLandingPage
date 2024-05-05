import React from 'react';
import './cta.css'

const Cta = () => {
   return (
      <div className="transformer__cta section__margin">
         <div className="transformer__cta-content">
            <p>Let's Get Started</p>
            <h2>Take the first step, and contact us to discuss your marketing and business goals. Send us a message, and we will get back to you soon.</h2>
         </div>
         <div className="transformer__cta-btn">
            <a href="https://ig.me/m/flopmarketing" target="_blank" rel="noopener noreferrer">
               <button type="button">DM Us Now!</button>
            </a>

         </div>
      </div>
   )
}

export default Cta

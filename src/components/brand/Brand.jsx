import React from 'react';
import {google,atlassian,dropbox,shopify} from './import.js'

import './brand.css'



const Brand = () => {
   return (
      <div className="transformer__brand section__padding" id='brand'>
         <figure>
            <img src={google} alt="transformer google" width="100%" height="30px" filter='grayscale(100%)'/>
         </figure>
         <figure>
            <img src={atlassian} alt="transformer atlassian" width="100%" height="38px" filter='grayscale(100%)'/>
         </figure>
         <figure>
            <img src={dropbox} alt="transformer dropbox" width="100%" height="35px" filter='grayscale(100%)'/>
         </figure>
         <figure>
            <img src={shopify} alt="transformer shopify" width="100%" height="35px" filter='grayscale(100%)'/>
         </figure>
         {/* <figure>
            <img src={slack} alt="transformer shopify" width="100%" height="35px" filter='grayscale(100%)' background-color= 'transparent'/>
         </figure> */}
      </div>
   )
}

export default Brand

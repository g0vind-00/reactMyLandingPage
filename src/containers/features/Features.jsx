import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData =[
   
   {
      title:'Leveraging AI for ADs',
      text:'We use AI model on top of ADs to analyze data, identify patterns, and make predictions that garauntees success.'
   },
   
   {
      title:'Leveraging AI for SEO',
      text:'Harnessing natural language processing, trend analysis, and user behavior modeling for unparalleled optimization and ranking prowess.'
   },
   
   {
      title:'Algorithm Hacks',
      text:'Our team constantly works on finding New Social Media algorithm hacks to grow your account/product organically.'
   },

   {
      title:'Providin end-to-end Marketing Solution',
      text:'Coming Soon...'
   }
]

const Features = () => {
   return (
      <div className="transformer__features section__padding" id="features">
         <div className="transformer__features-heading">
            <h1 className="gradient__text">
            Empower Your Brand's Future using AI. <br /> Step into Tomorrow & Make It Happen.
            </h1>
            <p>Contact Us Now to Get Started</p>
         </div>

         <div className="transformer__features-container">
            {featuresData.map((item,index)=>(
               <Feature title={item.title} text={item.text} key={item.title +index}></Feature>
            ))}

         </div>
      </div>
   )
}

export default Features

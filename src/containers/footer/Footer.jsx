import React from 'react';
import transformerLogo from '../../assets/Transformerlogo.png';
import './footer.css'
const Footer = () => {
   return (
      <div className="transformer__footer section__padding">
         <div className="transformer__footer-heading">
            <h1 className="gradient__text">Get ahead in marketing <br /> grow faster before others</h1>
         </div>

         <div className="transformer__footer-btn">
            <a href="https://ig.me/m/flopmarketing" target="_blank" rel="noopener noreferrer">
               <button type="button">Get Started</button>
            </a>
         </div>

         <div className="transformer__footer-links">
            <div className="transformer__footer-links_logo">
               <figure>
                  <img src={transformerLogo} alt="Footer logo" />
                  <address>
                     <p>Flop Marketing, All Rights Reserved</p>
                  </address>
               </figure>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Contacts</h4>
               <ul>
                  <li><a href="https://ig.me/m/flopmarketing">Instagram</a></li>
                  <li><a href="https://ig.me/m/flopmarketing">Telegram</a></li>
                  <li><a href="https://ig.me/m/flopmarketing">WhatsApp</a></li>
                  <li><a href="mailto:contact@flopmarketing.com?subject=Our%20Requirements&body=Hi%20Flop%20Marketing,">Email</a></li>
               </ul>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Company</h4>
               <ul>
                  <li><a href="/termsConditions">Terms & Conditions</a></li>
                  <li><a href="/privacyPolicy">Privacy Policy</a></li>
               </ul>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Get in touch</h4>
               {/* <p>Dublin,Ireland</p>
               <p>+0085-132567</p> */}
               <p><a href="mailto:contact@flopmarketing.com?subject=Our%20Requirements&body=Hi%20Flop%20Marketing,">contact@flopmarketing.com</a></p>
            </div>
         </div>
         <div className="transformer__footer-copyright">
            <p>© 2024 FLOP MAKRETING. All rights reserved.</p>
         </div>
      </div>
   )
}
export default Footer

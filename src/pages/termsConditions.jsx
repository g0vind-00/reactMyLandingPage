import React from 'react';
import './TermsConditions.css';
import { Navbar } from '../components';
import { Footer } from '../containers';

function TermsConditions() {
  return (
    <div>
      <Navbar />
      <div className="terms-conditions">
        <h1><span className="gold">Terms & Conditions</span></h1>

        <p>Welcome to <span className="bold">Flop Marketing</span>. These terms and conditions outline the rules and regulations for the use of <span className="bold">Flop Marketing</span>'s website.</p>

        <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use <span className="bold">Flop Marketing</span> if you do not agree to all of the terms and conditions stated on this page.</p>

        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of the United States. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

        <h2><span className="coral">Cookies</span></h2>
        <p>We employ the use of cookies. By accessing <span className="bold">Flop Marketing</span>, you agreed to use cookies in agreement with the <span className="bold">Flop Marketing</span>'s Privacy Policy.</p>

        <h2><span className="gold">License</span></h2>
        <p>Unless otherwise stated, <span className="bold">Flop Marketing</span> and/or its licensors own the intellectual property rights for all material on <span className="bold">Flop Marketing</span>. All intellectual property rights are reserved. You may access this from <span className="bold">Flop Marketing</span> for your own personal use subjected to restrictions set in these terms and conditions.</p>

        <h2><span className="gold">You must not:</span></h2>
        <ul>
          <li>Republish material from <span className="bold">Flop Marketing</span></li>
          <li>Sell, rent or sub-license material from <span className="bold">Flop Marketing</span></li>
          <li>Reproduce, duplicate or copy material from <span className="bold">Flop Marketing</span></li>
          <li>Redistribute content from <span className="bold">Flop Marketing</span></li>
        </ul>

        <p>This Agreement shall begin on the date hereof.</p>

        <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. <span className="bold">Flop Marketing</span> does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of <span className="bold">Flop Marketing</span>, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, <span className="bold">Flop Marketing</span> shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

        <p><span className="bold">Flop Marketing</span> reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>

        <p>You warrant and represent that:</p>
        <ul>
          <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
          <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
          <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy;</li>
          <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
        </ul>

        <p>You hereby grant <span className="bold">Flop Marketing</span> a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>

        <h2><span className="coral">Hyperlinking to our Content</span></h2>
        <p>The following organizations may link to our Website without prior written approval:</p>
        
        {/* More content can be added here */}
      </div>
      <Footer />
    </div>
  );
}

export default TermsConditions;

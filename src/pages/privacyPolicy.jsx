import React from 'react';
import './PrivacyPolicy.css'; // Import CSS for styling
import { Navbar } from '../components';
import { Footer } from '../containers';

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="privacy-policy">
        <h1>Privacy Policy</h1>

        <p>Welcome to Flop Marketing (the "Company", "We", "Us", or "Our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at contact@flopmarketing.com.</p>

        <p>This Privacy Policy governs the privacy policies and practices of our Website, located at flopmarketing.com. Please read our Privacy Policy carefully as it will help you make informed decisions about sharing your personal information with us.</p>

        <h2>Information We Collect</h2>

        <p>We collect personal information that you voluntarily provide to us when registering at the Website, expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website, or otherwise contacting us.</p>

        <h2>How We Use Your Information</h2>

        <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

        <h2>Disclosure of Your Information</h2>

        <p>We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>

        <h2>Do Not Track Signals</h2>

        <p>We do not respond to Do Not Track signals.</p>

        <h2>Changes to Our Privacy Policy</h2>

        <p>We reserve the right to modify this privacy policy at any time. If we make material changes to this policy, we may notify you on our Website, by a blog post, by email, or by any method we determine. The method we chose is at our sole discretion. We will also change the "Last Updated" date at the beginning of this Privacy Policy. Any changes we make to our privacy policy are effective as of this Last Updated date and replace any prior Privacy Policies.</p>

        <p>If you have any questions about this Privacy Policy, please contact us via email at contact@flopmarketing.com.</p>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

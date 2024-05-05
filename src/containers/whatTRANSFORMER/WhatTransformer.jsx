import React from 'react'
import Feature  from '../../components/feature/Feature'
import './whatTransformer.css'

const WhatTransformer = () => {
   return (
      <div className="transformer__whattransformer section__margin" id="transformer">
      <div className="transformer__whattransformer-feature">
        <Feature title="Welcome to Flop Marketing" text="We are the experts in Social Media Marketing. We will help you boost your online presence and reach your target audience." />
      </div>
      <div className="transformer__whattransformer-heading">
        <h1 className="gradient__text">Strategies that are beyond your imagination</h1>
        <p>Explore Our Services</p>
      </div>
      <div className="transformer__whattransformer-container">
        <Feature title="Fan Pages" text="Fan pages cultivate communities, foster direct engagement, showcase brand personality, gather feedback, and facilitate loyalty, crucial for effective marketing strategies." />
        <Feature title="Mass DM" text="Mass DMs enable targeted outreach, personalized communication, swift dissemination of information, fostering connections, and amplifying brand visibility effectively." />
        <Feature title="Chatters" text="Chatters drive engagement, provide real-time feedback, foster brand loyalty, generate buzz, and offer valuable insights for marketing strategies." />
      </div>
    </div>
   )
}

export default WhatTransformer

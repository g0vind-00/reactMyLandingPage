import React from 'react';
import {blog01,blog02,blog03} from './imports'
import { Article } from '../../components';
import './blog.css'

const Blog = () => {
   return (
      <div className="transformer__blog section__padding" id="blog">
         <div className="transformer__blog-heading">
            <h1 className="gradient__text">Behind the scenes of<br/> Flop Marketing.</h1>
         </div>

         <div className="transformer__blog-container">
            <div className="transformer__blog-container_groupA">
               <Article imgUrl={blog01} title="Our Approach" description="We take a data-driven approach to social media marketing, using analytics and insights to inform our strategies. We also prioritize transparency and communication, keeping our clients informed every step of the way."/>
            </div>
            <div className="transformer__blog-container_groupB">
               <Article imgUrl={blog02} title="Our Story" description="At Flop Marketing, we started with a passion for helping small businesses succeed online. We've grown into a full-service social media marketing agency with a talented team and a commitment to delivering results." />
               <Article imgUrl={blog03} title="Our Services" description="We offer a range of social media marketing services to help small businesses establish a strong online presence. From social media management to paid advertising, we have the expertise to help you succeed."/>
               {/* <Article imgUrl={blog04} date="Sep 26, 2021" title="TransformAI and Open  AI is the future. Let us exlore how it is?"/>
               <Article imgUrl={blog05} date="Sep 26, 2021" title="TransformAI and Open  AI is the future. Let us exlore how it is?"/> */}
            </div>
         </div>
      </div>
   )
}

export default Blog

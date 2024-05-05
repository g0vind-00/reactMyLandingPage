import React from 'react';
import './article.css'

const Article = ({imgUrl,description,title}) => {
   return (
      <div className="transformer__blog-container_article">
         <div className="transformer__blog-container_article-image">
            <img src={imgUrl} alt="blog"/>
         </div>

         <div className="transformer__blog-container_article-content">
            <div>
               <h1>{title}</h1>
               <h2 color='#FFFFFF'>{description}</h2>
            </div>
            {/* <p>Read Full Article</p> */}
         </div>
      </div>
   )
}

export default Article

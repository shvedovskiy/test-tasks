import React from 'react';
import './news-list.css';


export default ({ news }) => (
  <div className="newslist">
    <div className="header">
      <strong>Wizard News</strong>
    </div>
    {
      news && news.map(post => (
        <div key={post.id}>
          <p>
            {post.id} ⬆ {post.title}
          </p>
          <small>
            {post.upvotes} upvotes by {post.author}
          </small>
        </div>
      ))
    }
  </div>
);

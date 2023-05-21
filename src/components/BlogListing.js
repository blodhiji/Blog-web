import React from 'react';
import ArticleCard from './ArticleCard';

const BlogListing = ({ articles }) => {
  return (
    <div className="blog-listing " >
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default BlogListing;

import React, { useState, useEffect } from 'react';
import BlogListing from './components/BlogListing';
import axios from 'axios';
import './index.css';
import Navbar from './components/Navbar';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        'https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10'
      );
      setArticles(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="container">
      <h1 className="title">Blog Listing</h1>
      {articles.length > 0 ? (
        <BlogListing articles={articles} />
      ) : (
        <p>No articles available</p>
      )}
    </div>
    </div>
  );
};

export default App;

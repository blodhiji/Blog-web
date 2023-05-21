import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

const BlogArticle = ({ article }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [blogDetails, setBlogDetails] = useState(null);

  const openModal = async () => {
    if(article && article.slug){
    try {
      const response = await axios.get(
        `https://api.theinnerhour.com/v1/blogdetail/${article.slug}`
      );
      setBlogDetails(response.data);
      setModalOpen(true);
    } catch (error) {
      console.error(error);
    }
}
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2>{article?.title || ''}</h2>
      <p>{article?.excerpt || ''}</p>
      {/* <button onClick={openModal}>Read More</button> */}

      {modalOpen && (
        <Modal closeModal={closeModal}>
          {blogDetails && (
            <>
              <img src={blogDetails.coverImage} alt={blogDetails.title} />
              <h2>{blogDetails.title}</h2>
              <p>{blogDetails.bodyText}</p>
            </>
          )}
        </Modal>
      )}
    </div>
  );
};

export default BlogArticle;

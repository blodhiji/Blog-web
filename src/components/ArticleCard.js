
import React, { useState } from "react";

// Rest of the code...

const ArticleCard = ({ article }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="row my-3">
      <div className="col-sm-4 my-3">
        <div class="card " style={{ width: "18rem" }}>
          <img src={article.thumb} alt={article.title} className="thumb" />
          <div class="card-body">
            <h2 className="title">{article.title}</h2>
            <p className="body">{article.body}</p>
            <button className="read-more" onClick={handleReadMore}>
              Read More
            </button>
          
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2 className="modal-title">{article.title}</h2>
            <img src={article.thumb} alt={article.title} className="thumb" />
            <p className="body">{article.body}</p>
          </div>
        </div>
      )}
      </div>
        </div>
      </div>
    </div>
  );
};


export default ArticleCard;






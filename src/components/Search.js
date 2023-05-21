import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search"  style={{backgroundColor: 'blue'}}>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;

import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
  <div>
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Blog</a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>
  );
};

export default Navbar;

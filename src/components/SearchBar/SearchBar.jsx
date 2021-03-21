import React from 'react';
import {useState} from 'react';
import { toast } from 'react-toastify';

const SearchBar = ({onSubmit}) => {
  const [search, setSearch] = useState('');

const handleChange = (event) => {
    setSearch(event.currentTarget.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  if(search.trim === '') {
    toast.error("You don't load name films");
    return;
  }
  onSubmit(search);
  reset();
};

const reset = () => {
  setSearch('');
};



  return(
    <form onSubmit={handleSubmit}>
      <button  type="submit">
        <span>Search</span>
      </button>
      <input 
         type="text"
         value={search}
         onChange={handleChange}
         autoComplete="off"
         autoFocus
         placeholder="Search movies" />
    </form>
  )
};


export default SearchBar;
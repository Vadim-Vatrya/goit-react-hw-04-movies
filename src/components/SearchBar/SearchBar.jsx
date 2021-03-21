import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import { toast } from 'react-toastify';

const SearchBar = ({onSubmit}) => {

  const [value, setValue] = useState('');

const handleChange = event => {
  setValue(event.target.value.toLowerCase());
};

const handleSubmit = event => {
  event.preventDefault();
  if(value.trim === '') {
    toast.error("You don't load name films");
    return;
  }
  onSubmit(value);
  reset();
};

const reset = () => {
  setValue('');
};



  return(
    <>
    <form onSubmit={handleSubmit}>
      <button  type="submit">
        <span>Search film</span>
      </button>

      <input 
         type="text"
         value={value}
         onChange={handleChange}
         autoComplete="off"
         autoFocus
         placeholder="Search film" />
    </form>
    </>
  )
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default SearchBar;
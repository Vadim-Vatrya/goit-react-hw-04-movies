import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import { toast } from 'react-toastify';

import style from './SearchBar.module.scss';

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
    <div className={style.Searchbar}>
    <form onSubmit={handleSubmit} className={style.SearchForm}>
      <button  type="submit" className={style.SearchButton}>
        <span className={style.SearchFormButton}>Search film</span>
      </button>

      <input 
         className={style.SearchInput}
         type="text"
         value={value}
         onChange={handleChange}
         autoComplete="off"
         autoFocus
         placeholder="Search film" />
    </form>
    </div>
  )
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default SearchBar;
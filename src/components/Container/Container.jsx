import React from 'react';
import PropTypes from 'prop-types';
import style from './Container.module.scss';

const Container = ({children}) => {
return <div className={style.container}>
  {children}
</div>
}

Container.propTypes = {
  children: PropTypes.array.isRequired
};

export default Container;
import React from 'react';
import store from './store';

const Button = ({ label, type }) => {
  const handleClick = () => {
    store.dispatch({ type });
  };
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;

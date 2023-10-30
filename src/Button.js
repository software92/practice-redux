import React from 'react';
import store, { add, minus } from './store';

const Button = ({ label, type }) => {
  const handleClick = () => {
    // store.dispatch({ type });
    if (type === 'ADD') {
      store.dispatch(add());
    } else {
      store.dispatch(minus());
    }
  };
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;

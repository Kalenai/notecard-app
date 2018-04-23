import React from 'react';
import classes from './Button.css';

const Button = (props) => {
  const { onClick, children } = props;

  return (
    <button onClick={onClick} className={classes.Button}>
      {children}
    </button>
  );
};

export default Button;
import React from 'react';
import classes from './NotecardButtonBar.css';

const NotecardButtonBar = (props) => {
  const { children } = props;
  return (
    <div className={classes.ButtonBar}>
      {children}
    </div>
  );
};

export default NotecardButtonBar;
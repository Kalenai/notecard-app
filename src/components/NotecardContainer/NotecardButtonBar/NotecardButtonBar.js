import React from 'react';
import classes from './NotecardButtonBar.css';

const NotecardButtonBar = (props) => {
  const { notecardExpanded, children } = props;

  const expandedStyle = notecardExpanded ? classes.NotecardExpanded : '';

  return (
    <div className={`${classes.ButtonBar} ${expandedStyle}`}>
      {children}
    </div>
  );
};

export default NotecardButtonBar;
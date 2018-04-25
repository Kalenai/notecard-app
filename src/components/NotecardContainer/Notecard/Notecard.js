import React from 'react';
import classes from './Notecard.css';

const Notecard = props => {
  const { notecardExpanded, notecardColor, onClick } = props;

  const expandedStyle = notecardExpanded ? classes.NotecardExpanded : '';

  return (
    <div className={`${classes.Notecard} ${expandedStyle}`} style={{backgroundColor: `${notecardColor}`}} onClick={onClick}>
      {props.children(props)}
    </div>
  );
};

export default Notecard;

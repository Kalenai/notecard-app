import React from 'react';
import classes from './Notecard.css';

const Notecard = props => {
  const { notecardExpanded, notecardColor, notecardPinned, onClick } = props;

  const expandedStyle = notecardExpanded ? classes.NotecardExpanded : '';

  return (
    <div className={`${classes.Notecard} ${expandedStyle}`} style={{backgroundColor: `${notecardColor}`}} onClick={onClick}>
      {notecardPinned ? <div className={classes.Pinned}><i class="fas fa-thumbtack"></i></div> : null}
      {props.children(props)}
    </div>
  );
};

export default Notecard;

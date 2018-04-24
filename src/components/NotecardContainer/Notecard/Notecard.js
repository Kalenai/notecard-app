import React from 'react';
import classes from './Notecard.css';

const Notecard = props => {
  const { title, content, onTitleChange, onContentChange, notecardExpanded } = props;

  const expandedStyle = notecardExpanded ? classes.NotecardExpanded : '';

  return (
    <div className={`${classes.Notecard} ${expandedStyle}`}>
      {props.children(title, content, onTitleChange, onContentChange, notecardExpanded)}
    </div>
  );
};

export default Notecard;

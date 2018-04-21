import React from 'react';
import classes from './Notecard.css';

const Notecard = (props) => {
  const {title, content, onTitleChange, onContentChange} = props;

  return (
    <div className={classes.Notecard}>
      {props.children(title, content, onTitleChange, onContentChange)}
    </div>
  );
};

export default Notecard;
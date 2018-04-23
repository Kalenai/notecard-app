import React from 'react';
import classes from './Notecard.css';

const Notecard = props => {
  const { title, content, onTitleChange, onContentChange, notecardSizeSmall } = props;

  const appliedClasses = [classes.Notecard];
  if (notecardSizeSmall) {
    appliedClasses.push(classes.NotecardSmall);
  }

  return (
    <div className={appliedClasses.join(' ')}>
      {props.children(title, content, onTitleChange, onContentChange)}
    </div>
  );
};

export default Notecard;

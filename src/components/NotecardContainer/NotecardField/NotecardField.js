import React from 'react';
import ContentEditable from 'react-sane-contenteditable';
import classes from './NotecardField.css';  

const NotecardField = (props) => {
  const { placeholder, content } = props;

  return (
    <ContentEditable
      content={content}
      className={classes.NotecardField}
      tagName='span'
      multiLine={true}
      onChange={props.handleChange}
      placeholder={placeholder}
    />
  );
};

export default NotecardField;
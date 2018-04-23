import React from 'react';
import ContentEditable from 'react-sane-contenteditable';
import classes from './NotecardField.css';  

const NotecardField = (props) => {
  const { placeholder, content } = props;

  return (
    <div className={classes.NotecardField}>
      <ContentEditable
        content={content}
        tagName='span'
        multiLine={true}
        onChange={props.handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default NotecardField;
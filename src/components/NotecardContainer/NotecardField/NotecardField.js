import React from 'react';
import ContentEditable from 'react-sane-contenteditable';

const NotecardField = (props) => {
  const content = props.content !== "" ? props.content : props.placeholder;

  return (
    <ContentEditable
      content={content}
      multiLine={true}
      onChange={props.handleChange}
    />
  );
};

export default NotecardField;
import React from 'react';
import ContentEditable from 'react-sane-contenteditable';
import classes from './NotecardField.css';  

const NotecardField = (props) => {
  const { placeholder, content, isTitle, notecardExpanded } = props;

  const titleStyle = isTitle ? classes.NotecardTitle : ''
  const expandedStyle = notecardExpanded ? classes.NotecardExpanded : '';

  return (
    <div className={`${classes.NotecardField} ${titleStyle} ${expandedStyle}`}>
      <ContentEditable
        content={content}
        tagName='span'
        className={`${classes.NotecardFieldInner}`}
        multiLine={true}
        onChange={props.handleChange}
        placeholder={placeholder}
        editable={notecardExpanded}
        style={{whiteSpace: ''}}
      />
    </div>
  );
};

export default NotecardField;
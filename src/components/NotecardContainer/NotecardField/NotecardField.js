import React from 'react';
import ContentEditable from 'react-sane-contenteditable';
import classes from './NotecardField.css';  

const NotecardField = (props) => {
  const { placeholder, content, isTitle, notecardExpanded, handleChange } = props;

  const titleStyle = isTitle ? classes.NotecardTitle : ''
  const expandedStyle = notecardExpanded ? classes.NotecardExpanded : '';

  // TODO - fix bug causing notecardExpanded changing to not update the editable property of ContentEditable
  return (
    <div className={`${classes.NotecardField} ${titleStyle} ${expandedStyle}`}>
      <ContentEditable
        content={content}
        tagName='span'
        className={`${classes.NotecardFieldInner}`}
        multiLine={true}
        onChange={handleChange}
        placeholder={placeholder}
        editable={notecardExpanded}
        style={{whiteSpace: ''}}
      />
    </div>
  );
};

export default NotecardField;
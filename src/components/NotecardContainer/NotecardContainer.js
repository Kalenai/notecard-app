import React, { Component } from 'react';
import Notecard from './Notecard/Notecard';
import NotecardField from './NotecardField/NotecardField';

class NotecardContainer extends Component {
  state = {
    title: '',
    content: ''
  };

  onTitleChange = (event, value) => {
    this.setState({ title: value });
  };

  onContentChange = (event, value) => {
    this.setState({ content: value });
  };

  render() {
    const { state, onTitleChange, onContentChange } = this;
    const { title, content } = state;

    return (
      <Notecard
        title={title}
        content={content}
        onTitleChange={onTitleChange}
        onContentChange={onContentChange}
      >
        {(title, content, onTitleChange, onContentChange) => (
          <React.Fragment>
            <NotecardField
              content={title}
              placeholder="Title..."
              handleChange={onTitleChange}
            />
            <NotecardField
              content={content}
              placeholder="Type your note..."
              handleChange={onContentChange}
            />
          </React.Fragment>
        )}
      </Notecard>
    );
  }
}

export default NotecardContainer;

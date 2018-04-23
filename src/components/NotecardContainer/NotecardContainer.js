import React, { Component } from 'react';
import Notecard from './Notecard/Notecard';
import NotecardField from './NotecardField/NotecardField';
import Button from '../UI/Button/Button';
import NotecardButtonBar from './NotecardButtonBar/NotecardButtonBar';

class NotecardContainer extends Component {
  state = {
    title: '',
    content: ''
  }

  onTitleChange = (event, value) => {
    this.setState({ title: value });
  }

  onContentChange = (event, value) => {
    this.setState({ content: value });
  }

  render() {
    const { state, onTitleChange, onContentChange } = this;
    const { title, content } = state;

    return (
      <Notecard
        title={title}
        content={content}
        onTitleChange={onTitleChange}
        onContentChange={onContentChange}
        notecardSizeSmall={true}
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
            <NotecardButtonBar>
              <Button>Color</Button>
              <Button>Delete</Button>
              <Button>Pin</Button>
              <Button>Close</Button>
            </NotecardButtonBar>
          </React.Fragment>
        )}
      </Notecard>
    );
  }
}

export default NotecardContainer;

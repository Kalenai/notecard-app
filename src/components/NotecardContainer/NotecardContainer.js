import React, { Component } from 'react';
import Notecard from './Notecard/Notecard';
import NotecardField from './NotecardField/NotecardField';
import Button from '../UI/Button/Button';
import NotecardButtonBar from './NotecardButtonBar/NotecardButtonBar';
import { TwitterPicker } from 'react-color';

class NotecardContainer extends Component {
  state = {
    title: 'Lorem ipsum - A Love Story',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    notecardExpanded: true,
    notecardPinned: false,
    notecardColor: '#fff',
    showColorPicker: false,
    colorOptions: ['#fff', '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#9edbe8', '#adb0ff']
  };

  onTitleChange = (event, value) => {
    this.setState({ title: value });
  };

  onContentChange = (event, value) => {
    this.setState({ content: value });
  };

  openNotecardHandler = () => {
    this.setState({ notecardExpanded: true });
  };

  closeNotecardHandler = () => {
    this.setState({ notecardExpanded: false });
  };

  toggleColorPickerHandler = () => {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  };

  colorChangeHandler = color => {
    this.setState({ notecardColor: color.hex });
  };

  changePinnedHandler = () => {
    this.setState({ notecardPinned: !this.state.notecardExpanded });
  };

  render() {
    const {
      state,
      onTitleChange,
      onContentChange,
      openNotecardHandler,
      closeNotecardHandler,
      colorChangeHandler,
      toggleColorPickerHandler
    } = this;
    
    const {
      title,
      content,
      notecardExpanded,
      notecardPinned,
      notecardColor,
      showColorPicker,
      colorOptions
    } = state;

    return (
      <Notecard
        title={title}
        content={content}
        notecardExpanded={notecardExpanded}
        notecardColor={notecardColor}
        notecardPinned={notecardPinned}
        showColorPicker={showColorPicker}
        colorOptions={colorOptions}
        onTitleChange={onTitleChange}
        onContentChange={onContentChange}
        closeNotecardHandler={closeNotecardHandler}
        colorChangeHandler={colorChangeHandler}
        toggleColorPickerHandler={toggleColorPickerHandler}
        onClick={!notecardExpanded ? openNotecardHandler : null}
      >
        {({
          title,
          content,
          notecardExpanded,
          notecardColor,
          showColorPicker,
          colorOptions,
          onTitleChange,
          onContentChange,
          closeNotecardHandler,
          colorChangeHandler,
          toggleColorPickerHandler
        }) => (
          <React.Fragment>
            <NotecardField
              content={title}
              placeholder="Title..."
              handleChange={onTitleChange}
              isTitle={true}
              notecardExpanded={notecardExpanded}
            />
            <NotecardField
              content={content}
              placeholder="Type your note..."
              handleChange={onContentChange}
              isTitle={false}
              notecardExpanded={notecardExpanded}
            />
            <NotecardButtonBar notecardExpanded={notecardExpanded}>
              <Button onClick={toggleColorPickerHandler}>Color</Button>
              {showColorPicker ? (
                <div
                  style={{
                    position: 'absolute',
                    top: '95%'
                  }}
                >
                  <TwitterPicker
                    color={notecardColor}
                    colors={colorOptions}
                    onChange={colorChangeHandler}
                  />
                </div>
              ) : null}
              <Button>Delete</Button>
              <Button>Pin</Button>
              <Button onClick={closeNotecardHandler}>Close</Button>
            </NotecardButtonBar>
          </React.Fragment>
        )}
      </Notecard>
    );
  }
}

export default NotecardContainer;

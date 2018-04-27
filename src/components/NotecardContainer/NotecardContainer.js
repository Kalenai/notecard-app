import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import Notecard from './Notecard/Notecard';
import NotecardField from './NotecardField/NotecardField';
import Button from '../UI/Button/Button';
import NotecardButtonBar from './NotecardButtonBar/NotecardButtonBar';
import ColorPicker from './ColorPicker/ColorPicker';

class NotecardContainer extends Component {
  state = {
    title: 'Lorem ipsum - A Love Story',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    notecardExpanded: true,
    notecardPinned: false,
    notecardColor: '#fff',
    showColorPicker: false,
    colorOptions: [
      '#fff',
      '#ffb3ba',
      '#ffdfba',
      '#ffffba',
      '#baffc9',
      '#9edbe8',
      '#adb0ff'
    ]
  };

  handleClickOutside = () => {
    if (this.state.notecardExpanded) {
      this.setState({ notecardExpanded: false });
    }
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

  closeColorPickerHandler = () => {
    this.setState({ showColorPicker: false });
  };

  colorChangeHandler = color => {
    this.setState({ notecardColor: color.hex });
  };

  togglePinnedHandler = () => {
    this.setState({ notecardPinned: !this.state.notecardPinned });
  };

  deleteNotecardHandler = () => {
    alert('Notecard deletion not yet implemented');
  };

  render() {
    const {
      state,
      onTitleChange,
      onContentChange,
      openNotecardHandler,
      closeNotecardHandler,
      colorChangeHandler,
      toggleColorPickerHandler,
      closeColorPickerHandler,
      togglePinnedHandler,
      deleteNotecardHandler
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
        closeColorPickerHandler={closeColorPickerHandler}
        togglePinnedHandler={togglePinnedHandler}
        deleteNotecardHandler={deleteNotecardHandler}
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
          toggleColorPickerHandler,
          closeColorPickerHandler,
          togglePinnedHandler,
          deleteNotecardHandler
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
                <ColorPicker
                  color={notecardColor}
                  colors={colorOptions}
                  onChange={colorChangeHandler}
                  closeHandler={closeColorPickerHandler}
                />
              ) : null}
              <Button onClick={deleteNotecardHandler}>Delete</Button>
              <Button onClick={togglePinnedHandler}>Pin</Button>
              <Button onClick={closeNotecardHandler}>Close</Button>
            </NotecardButtonBar>
          </React.Fragment>
        )}
      </Notecard>
    );
  }
}

export default onClickOutside(NotecardContainer);

import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';
import onClickOutside from "react-onclickoutside";
import classes from './ColorPicker.css';

class ColorPicker extends Component {
  handleClickOutside = () => {
    this.props.closeHandler();
  }

  render() {
    const { color, colors, onChange } = this.props;

    return (
      <div className={classes.ColorPicker}>
        <TwitterPicker
          color={color}
          colors={colors}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default onClickOutside(ColorPicker);

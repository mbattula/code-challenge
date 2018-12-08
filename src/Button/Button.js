import React, { Component } from 'react';
import './Button.css'

class Button extends Component{
  constructor(props){
    super(props);
  }

  onClickHandler = () => {
    this.props.onClick();
  }
  render(){
    return(
      <button className="btn" onClick={this.onClickHandler}>{this.props.title}</button>
    );
  }
}

export default Button;

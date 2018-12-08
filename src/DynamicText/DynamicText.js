import React, { Component } from 'react';
import './DynamicText.css'

class DynamicText extends Component{
  constructor(props){
    super(props);
    this.state = {fontSize:16}
  }

  onWheelHandler=(e)=>{
    var fontSize= this.state.fontSize;
    if(e.deltaY < 0) {
        this.setState({fontSize: fontSize+1});
    }
    else{
        this.setState({fontSize: fontSize-1});
    }
  }

  render(){
    return (
      <div className="dynamic-text" onWheel={this.onWheelHandler} style={{fontSize: this.state.fontSize}}>Change the font size by scrolling the mouse</div>
    );
  }
}

export default DynamicText;

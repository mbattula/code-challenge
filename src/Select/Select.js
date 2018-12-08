import React, { Component } from 'react';
import './Select.css';

class Select extends Component{
  constructor(props){
    super(props);
  }
  onChange = (e) => {
    this.props.onChange(e);
  }
  render(){
    return (
      <select onChange={this.onChange}>
      {
        this.props.options.map((item)=>{
          return (<option key={item}>{item}</option>);
        })
      }
      </select>
    );
  }
}

export default Select;

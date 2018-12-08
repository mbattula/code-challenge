import React, { Component } from 'react';
import './List.css';

class List extends Component{
  render(){
    return (
      <ul className="no-list">
      {
        this.props.listItems.map((item)=>{
          return (<li key={item}>{item}</li>);
        })
      }
      </ul>
    );
  }
}

export default List;

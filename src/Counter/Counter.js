import React, { Component } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './Counter.css';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state={counter:0, open: false};
  }

  onOpenClick = () => {
    var counter = this.state.counter;
    this.setState({
      counter : counter + 1,
      open: true
    });
  };

  onResetClick = () => {
    this.setState({
      counter: 0
    });
  };

  onModalClose = () => {
    this.setState({
      open: false
    });
  }

  render() {
    const modalContent=`Modal is clicked ${this.state.counter} number of times`;
    return(
      <div className="counter-wrapper">
        <Button title="Open" onClick={this.onOpenClick}/>
        <Modal modalTitle="Counter" modalContent={modalContent} open={this.state.open} onModalClose={this.onModalClose}/>
        <Button title="Reset" onClick={this.onResetClick}/>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import './Modal.css'

class Modal extends Component{
  constructor(props){
    super(props);
    this.state={open: this.props.open}
  }

  onClose = () => {
    this.setState({open: false})
  }

  render(){
    return(
      <Dialog
          open={this.props.open}>
          <DialogTitle id="alert-dialog-title">{this.props.modalTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.modalContent}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onModalClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

export default Modal;

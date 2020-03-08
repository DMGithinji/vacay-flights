import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
state = {
    showModal: this.props.showError
}


UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.showModal !== nextProps.showModal) {
        this.setState({ showModal: nextProps.showModal });
    }
}


toggle = () => () => {
    this.setState({
        showModal: !this.props.showModal
    });
    this.props.showError();
}

render() {
  return (
      <MDBContainer>
        <MDBModal isOpen={this.state.showModal} toggle={this.toggle()} centered>
          <MDBModalHeader toggle={this.toggle()} className="text-danger">Payment Error</MDBModalHeader>
          <MDBModalBody>
            Your payment seems to have failed. <br />
            Please try again while ensuring your account has sufficient balance and details entered are correct.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn className="m-2" color="primary" onClick={this.toggle()}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
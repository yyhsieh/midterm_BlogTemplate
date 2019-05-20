import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MyModal extends React.Component {
  render() {
    return (
        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <form className="DEL"> 
            <Modal.Header closeButton>
            <h2><Modal.Title>Edit The Post : {dat.title} </Modal.Title></h2>
            </Modal.Header>
          </form>
          <Modal.Body>
            <form className="niceform">
                <textarea className="js-mirror"
                    type="text"
                    onChange={e => this.setState({ updateToApply: e.target.value, idToUpdate: dat.id })}
                    placeholder= {dat.message} />
                <form className="DEL">
                    <button onClick={() =>
                        this.updateDB(this.state.idToUpdate, this.state.updateToApply)}>
                        UPDATE
                    </button>
                </form>
            </form>
          </Modal.Body>
        </Modal>
    );
  }
}

export default MyModal;
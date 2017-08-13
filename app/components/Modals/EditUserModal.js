import React from 'react';
import {
  Button,
  Modal
} from 'react-bootstrap';

class EditModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { toggleModal } = this.props;

    return (
        <div>
            <Modal show={toggleModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Under Development ...</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeModal}>Close</Button>
                    <Button bsStyle="primary" onClick={this.closeModal}>Edit User</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }
}

export default EditModal;
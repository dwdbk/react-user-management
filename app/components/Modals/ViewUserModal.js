import React from 'react';
import {
  Button,
  Modal
} from 'react-bootstrap';

class ViewModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { toggleModal, selectedUser } = this.props;

    return (
        <div>
            <Modal show={toggleModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { Object.keys(selectedUser).map(function (key) {
                        return (
                            <div key={key}>
                                <div>
                                    <p className="lead">First Name: {selectedUser[key].first_name}</p>
                                </div>
                                <div>
                                    <p className="lead">Last Name: {selectedUser[key].last_name}</p>
                                </div>
                                <div>
                                    <p className="lead">Email: {selectedUser[key].email}</p>
                                </div>
                                <div>
                                    <p className="lead">Contact: {selectedUser[key].contact}</p>
                                </div>
                                <div>
                                    <p className="lead">Address: {selectedUser[key].address}</p>
                                </div>
                                <div>
                                    <p className="lead">Date of Birth: {selectedUser[key].date_of_birth}</p>
                                </div>
                            </div>
                    );})}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }
}

export default ViewModal;
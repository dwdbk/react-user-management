import React from 'react';
import {
  Button,
  Modal
} from 'react-bootstrap';

class ViewModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { toggleModal } = this.props;

    return (
        <div>
            <Modal show={toggleModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p className="lead">First Name: test</p>
                    </div>
                    <div>
                        <p className="lead">Last Name: test</p>
                    </div>
                    <div>
                        <p className="lead">Email: test</p>
                    </div>
                    <div>
                        <p className="lead">Contact: test</p>
                    </div>
                    <div>
                        <p className="lead">Address: test</p>
                    </div>
                    <div>
                        <p className="lead">Date of Birth: test</p>
                    </div>
                    <div>
                        <p className="lead">First Name: test</p>
                    </div>
                    <div>
                        <p className="lead">First Name: test</p>
                    </div>
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
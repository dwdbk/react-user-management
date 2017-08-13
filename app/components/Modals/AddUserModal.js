import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  Button,
  Modal
} from 'react-bootstrap';

const form = reduxForm({
  form: 'AddModal',
  validate
});

const renderTextField = ({ input, type, meta: { touched, error } }) => (
    <div>
      <input className="form-control" type={type} {...input} />
      {touched && error && <span>{error}</span>}
    </div>
)

const renderTextAreaField = ({ input, type, meta: { touched, error } }) => (
    <div>
      <textarea className="form-control" {...input} ></textarea>
      {touched && error && <span>{error}</span>}
    </div>
)

class AddModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        const initData = {
            "firstName": '',
            "lastName": '',
            "contact": '',
            "email": '',
            "address": '',
            "dateOfBirth": ''
        };

        this.props.initialize(initData);
    }

    handleFormSubmit(formProps) {
        this.props.submitFormAction(formProps);
    }

  render() {
    const { toggleModal, handleSubmit } = this.props;

    return (
        <div>
            <Modal show={toggleModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User [Under Development]</Modal.Title>
                </Modal.Header>
                <form className="form-horizontal" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Modal.Body>                
                    <div className="form-group">
                        <label className="col-lg-2 control-label">First Name</label>
                        <div className="col-lg-10">
                            <Field name="firstName" type="text" component={renderTextField} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">Last Name</label>
                        <div className="col-lg-10">
                            <Field name="lastName" type="text" component={renderTextField} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">Contact</label>
                        <div className="col-lg-10">
                            <Field name="contact" type="number" component={renderTextField} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">Email</label>
                        <div className="col-lg-10">
                            <Field name="email" type="email" component={renderTextField} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">Address</label>
                        <div className="col-lg-10">
                            <Field name="address" component={renderTextAreaField} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">Date of Birth</label>
                        <div className="col-lg-10">
                            <Field name="dateOfBirth" type="number" component={renderTextField} />
                        </div>
                    </div>        
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeModal}>Close</Button>
                    <Button action="submit" bsStyle="primary" onClick={this.closeModal}>Add User</Button>
                </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
  }

  return errors;
}


function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(form(AddModal));

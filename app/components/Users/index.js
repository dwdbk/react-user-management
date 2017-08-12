import React from 'react';
import {
  Button,
  Table,
  Modal
} from 'react-bootstrap';
import AddModal from 'components/Modals/AddUserModal';
import EditModal from 'components/Modals/EditUserModal';
import ViewModal from 'components/Modals/ViewUserModal';
import DeleteModal from 'components/Modals/DeleteUserModal';
import UserDefault from 'assets/img/user-default.png';

class Users extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props, context) {
        super(props, context);

        this.state = {
            toggleAddModal: false,
            toggleEditModal: false,
            toggleViewModal: false,
            toggleDeleteModal: false
        };

        this.openAddModal = this.openAddModal.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.openViewModal = this.openViewModal.bind(this);
        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openAddModal = () => {
        this.setState({
            ...this.state,
            toggleAddModal: true,
        });
    }

    openEditModal = () => {
        this.setState({
            ...this.state,
            toggleEditModal: true,
        });
    }

    openViewModal = () => {
        this.setState({
            ...this.state,
            toggleViewModal: true,
        });
    }

    openDeleteModal = () => {
        this.setState({
            ...this.state,
            toggleDeleteModal: true,
        });
    }

    closeModal = () => {
        this.setState({
            ...this.state,
            toggleAddModal: false,
            toggleEditModal: false,
            toggleViewModal: false,
            toggleDeleteModal: false,
        });
    }

  render() {
    return (
        <div>
            <Button bsStyle="primary" className="pull-right" onClick={this.openAddModal}> Add User</Button>
            <br />
            <br />
            <Table className="table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Profile</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src={UserDefault} alt="Riverview User" /></td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>
                            <Button bsStyle="link" onClick={this.openViewModal}>
                                View
                            </Button>
                            <Button bsStyle="link" onClick={this.openEditModal}>
                                Edit
                            </Button>
                            <Button bsStyle="link" onClick={this.openDeleteModal}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <div>
                <AddModal
                    toggleModal={this.state.toggleAddModal}
                    closeModal={this.closeModal}
                />

                <EditModal
                    toggleModal={this.state.toggleEditModal}
                    closeModal={this.closeModal}
                />
                <ViewModal
                    toggleModal={this.state.toggleViewModal}
                    closeModal={this.closeModal}
                />
                <DeleteModal
                    toggleModal={this.state.toggleDeleteModal}
                    closeModal={this.closeModal}
                />
            </div>
        </div>
    );
  }
}

export default Users;
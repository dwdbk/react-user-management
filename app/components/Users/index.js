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
            toggleDeleteModal: false,
            deleteNodeId: null
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

    openViewModal = (userId) => {
        this.props.getUserData(userId).then(() => {
            this.setState({
                ...this.state,
                toggleViewModal: true,
            });       
        });
    }

    openDeleteModal = (nodeId) => {
        this.setState({
            ...this.state,
            toggleDeleteModal: true,
            deleteNodeId: nodeId
        });
    }

    handleDeleteUser = () => {
        this.props.handleDeleteUser(this.state.deleteNodeId).then(() => {
            this.setState({
                ...this.state,
                toggleDeleteModal: false,
                deleteNodeId: null
            });       
        }) 
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
    const { hasErrored, isLoading, users, selectedUser } = this.props;

    return (
        <div>
            <Button bsStyle="primary" className="pull-right" onClick={this.openAddModal}> Add User</Button>
            { hasErrored &&
                <h3>Sorry! There was an error loading the users</h3>
            }
            <br />
            <br />
            { !hasErrored &&
                <Table className="table">
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { isLoading && !users &&
                            <tr><td colSpan="6">Loading Users ...</td></tr>
                        }
                        { !isLoading && users && users.length > 0 && users.map((user, key) => (
                            <tr key={user.id}>
                                <td><img src={UserDefault} alt="Riverview User" /></td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button bsStyle="link" onClick={() => this.openViewModal(user.id)}>
                                        View
                                    </Button>
                                    <Button bsStyle="link" onClick={this.openEditModal}>
                                        Edit
                                    </Button>
                                    <Button bsStyle="link" onClick={() => this.openDeleteModal(key)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
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
                    selectedUser={this.props.selectedUser}
                />
                <DeleteModal
                    toggleModal={this.state.toggleDeleteModal}
                    deleteUser={this.handleDeleteUser}
                    closeModal={this.closeModal}
                />
            </div>
        </div>
    );
  }
}

export default Users;
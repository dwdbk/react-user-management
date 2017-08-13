/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Users from 'components/Users';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { userFetchData, getUserData, deleteUserData } from '../../actions/userActions';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
      this.props.fetchUsers();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header />
        <Grid bsClass="container">
          <Row bsClass="row">
            <Col xs={12}>
              <Users
                hasErrored={this.props.hasErrored}
                isLoading={this.props.isLoading}
                users={this.props.users}
                getUserData={this.props.fetchUser}
                selectedUser={this.props.selectedUser}
                handleDeleteUser={this.props.deleteUser}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users: state.get('users').users,
        hasErrored: state.get('users').hasErrored,
        isLoading: state.get('users').isLoading,
        selectedUser: state.get('users').userById
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(userFetchData()),
        fetchUser: (userId) => dispatch(getUserData(userId)),
        deleteUser: (deleteNodeId) => dispatch(deleteUserData(deleteNodeId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
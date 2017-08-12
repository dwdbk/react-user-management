import React from 'react';
import {
  Button,
  Breadcrumb,
  Navbar,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import Logo from 'assets/img/logo.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><img src={Logo} alt="Riverview" /></a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid bsClass="container">
          <Row bsClass="row">
              <Col xs={12}>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    User Management
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Header;
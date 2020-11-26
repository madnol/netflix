import React, { Component } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
class Registration extends Component {
  state = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
    yearOfBirth: "",
    streetOrAddress: "",
    city: "",
    PostalCode: "",
  };

  handleChange = event => {
    console.log(event);
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container className="px-5 mb-5">
        <Form onSubmit={this.handleSubmit}>
          <Row className="px-5">
            <label className="col-xl-6 my-2 flex">
              First Name:
              <input
                className="d-block "
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="col-xl-6 my-2 flex">
              Surname
              <input
                className="d-block "
                type="text"
                name="surname"
                value={this.state.surname}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="col-xl-6 my-2 flex">
              Email
              <input
                className="d-block "
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="col-xl-6 my-2 flex">
              Password
              <input
                className="d-block "
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="col-xl-6 my-2 flex">
              Year of birth
              <input
                className="d-block "
                name="yearOfBirth"
                type="date"
                value={this.state.yearOfBirth}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="col-xl-6 my-2 flex">
              Street/Address
              <input
                className="d-block "
                name="StreetOrAddress"
                type="text"
                value={this.state.StreetOrAddress}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="col-xl-6 my-2 flex">
              City
              <input
                className="d-block "
                name="city"
                type="text"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
            </label>

            <label className="col-xl-6 my-2 flex">
              Postal code
              <input
                className="d-block"
                name="PostalCode"
                type="text"
                value={this.state.PostalCode}
                onChange={this.handleChange}
                required
              />
            </label>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Registration;

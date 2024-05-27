iimport React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  };

  handleChangeEmail = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value }, this.handleEnableSubmit);
  };

  handleChangePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value }, this.handleEnableSubmit);
  };

  handleEnableSubmit = () => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  };


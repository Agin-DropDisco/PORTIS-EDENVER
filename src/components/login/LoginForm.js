import React from "react";
// import { Form, Icon, Input, Button, Checkbox, message, Spin } from 'antd';
import { Button, Spin, message, Form } from "antd";
import { web3, portis } from "../backend/web3";
import "./Login.module.css";
import "./Login.css";
import "./AntModal.css";

class LoginForm extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  
  handleSubmit = async (e) => {

    e.preventDefault();

    const { userLogin, closeModal } = this.props;
      this.setState({
        visible: false,
        loading: true,
      });
      web3.eth
        .getAccounts()
        .then((accounts) => {
          portis.showPortis();
          userLogin();
          closeModal();
          message.success("Login successfully.");
          console.log(accounts);
        });
  };

  render() {

    const { loading } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block={true}
        >
          {loading ? <Spin tip="FETCHING DATA ..."></Spin> : "ENTER"}
        </Button>
        {/*Or <a href="">register now!</a>*/}
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export { WrappedLoginForm };

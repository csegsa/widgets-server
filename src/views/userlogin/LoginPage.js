import React from "react";

import { Redirect, useHistory } from "react-router-dom";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";

import { auth, signInWithGoogle } from './Firebase';
import { useAuthState } from "react-firebase-hooks/auth";

function RegisterPage() {

  const history = useHistory();

  const login = () => {
    signInWithGoogle();
    // Redirect("/home");
    // history.replace("/home");
    history.goBack();
}

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <MainNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className="filter" />

        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    // href="#pablo"
                    onClick={login}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Creative Tim
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;

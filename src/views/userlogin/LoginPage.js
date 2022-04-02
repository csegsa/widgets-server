import React from "react"

import { Redirect, useHistory } from "react-router-dom";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap"

// core components
import MainNavbar from "components/Navbars/MainNavbar.js"
import backgroundImage from "assets/img/csegsa/Academic.JPG"

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
    document.body.classList.add("register-page")
    return function cleanup() {
      document.body.classList.remove("register-page")
    }
  })
  return (
    <>
      <MainNavbar />
      <div
        className='page-header'
        style={{
          backgroundImage: "url(" + backgroundImage + ")"
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
                    <i className='fa fa-google-plus' />
                  </Button>
                  
                </div>
                <Form className='register-form'>
                  <label>Email</label>
                  <Input placeholder='Email' type='text' />
                  <label>Password</label>
                  <Input placeholder='Password' type='password' />
                  <Button block className='btn-round' color='danger'>
                    Login
                  </Button>
                </Form>
                <div className='forgot'>
                  <Button
                    className='btn-link'
                    color='danger'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    Register new account?
                  </Button>
                  <Button
                    className='btn-link'
                    style={{ marginTop: "0px" }}
                    color='danger'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className='footer register-footer text-center'>
          <h6>© {new Date().getFullYear()}, CSEGSA, all rights reserved.</h6>
        </div>
      </div>
    </>
  )
}

export default RegisterPage

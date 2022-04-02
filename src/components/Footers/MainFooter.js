/*eslint-disable*/
import React from "react"

// reactstrap components
import { Row, Col, Container } from "reactstrap"
import Logo from "../../assets/img/csegsa/csegsa_logo_inverted.webp"

function MainFooter() {
<<<<<<< HEAD
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <Col md="4">
                        <nav className="footer-nav">
                            <img src={Logo} alt={"csegsa_logo"} style={{ width: 200 }} />
                        </nav>
                    </Col>
                    <Col md="4">
                        {/* <div className="credits ml-auto" style={{}}> */}
                            <div className="copyright" style={{fontSize:"14px", fontWeight:"400", marginTop:"25px", textAlign:"right"}}>
                                © {new Date().getFullYear()}, CSEGSA, all rights reserved.
                            </div>
                        {/* </div> */}
                    </Col>
                    <Col md="4" style={{textAlign:'right'}}>
                        <nav className="">
                            <div>
                                <div style={{fontSize:"16px", fontWeight:"700", marginTop:"10px"}}>Follow us</div>
                                {/* <div>

                                    <span style={{fontSize:"20px", fontWeight:"500", lineHeight: "45px"}}>Follow us</span>
                                </div> */}
                                <div>
                                    <span style={{marginRight:"20px"}}>
                                        <a
                                            href="https://www.creative-tim.com?ref=pkr-footer"
                                            target="_blank"
                                        >
                                            <i className="fa fa-twitter fa-2x" />
                                        </a>
                                    </span>
                                    <span style={{marginRight:"20px"}}>
                                        <a
                                            href="https://www.creative-tim.com?ref=pkr-footer"
                                            target="_blank"
                                        >
                                            <i className="fa fa-linkedin fa-2x" />
                                        </a>
                                    </span>
                                    <span>
                                        <a
                                            href="https://www.creative-tim.com?ref=pkr-footer"
                                            target="_blank"
                                        >
                                            <i className="fa fa-twitter fa-2x" style={{color:"#500000"}} />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default MainFooter;
=======
  return (
    <footer className='footer footer-black footer-white'>
      <Container>
        <Row>
          <Col md='6'>
            <nav className='footer-nav'>
              <img src={Logo} alt={"csegsa_logo"} style={{ width: 400 }} />
            </nav>
          </Col>
          <Col md='6'>
            <nav className=''>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "700", marginTop: "10px" }}>
                  Follow us
                </div>
                {/* <div>
                                
                                    <span style={{fontSize:"20px", fontWeight:"500", lineHeight: "45px"}}>Follow us</span>
                                </div> */}
                <div>
                  <span style={{ marginRight: "20px" }}>
                    <a href='https://www.creative-tim.com?ref=pkr-footer' target='_blank'>
                      <i className='fa fa-twitter fa-2x' />
                    </a>
                  </span>
                  <span style={{ marginRight: "20px" }}>
                    <a href='https://www.creative-tim.com?ref=pkr-footer' target='_blank'>
                      <i className='fa fa-linkedin fa-2x' />
                    </a>
                  </span>
                  <span>
                    <a href='https://www.creative-tim.com?ref=pkr-footer' target='_blank'>
                      <i className='fa fa-twitter fa-2x' />
                    </a>
                  </span>
                </div>
              </div>
            </nav>
          </Col>
          <Col md='6'>
            {/* <div className="credits ml-auto" style={{}}> */}
            <span className='copyright' style={{ fontSize: "16px", fontWeight: "400" }}>
              © {new Date().getFullYear()}, CSEGSA, all rights reserved.
            </span>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MainFooter
>>>>>>> 77b4663fe92a59ef76847d4540a974d7ee4f9c9d

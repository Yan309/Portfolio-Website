import { Container, Row, Col } from "react-bootstrap";
import Twt from "../resources/images/Twitter X.png";
import Gh from "../resources/images/GithubLogo.png";
import ll from "../resources/images/linkedin.png";

export const Footer = () => {
  return (
    <footer className="footer" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={Twt} alt="Icon" /></a>
              <a href="#"><img src={Gh} alt="Icon" /></a>
              <a href="#"><img src={ll} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
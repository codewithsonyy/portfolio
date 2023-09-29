import React from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Piyush Garg(utuber) and used by Soni Kumari. All right
                reserved for Piyush Bhaiya.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faFacebook, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="transparent" variant="dark">
      <Container>
        <Row>
          <Col xs={12}>
            <Nav className="me-auto flex-column">
              <Nav.Link className="d-flex flex-row align-items-center" href="#youtube">
              <span className={styles.Youtube}><FontAwesomeIcon icon={faYoutube} className="mr-2 p-2" width="30"/></span> <span className={styles.LinkText}>Watch on Youtube</span>
              </Nav.Link>
              <Nav.Link className="d-flex flex-row align-items-center" href="#spotify">
                <span className={styles.Spotify}><FontAwesomeIcon icon={faSpotify} className="mr-2 p-2 spotify" width="30"/></span> <span className={styles.LinkText}>Listen on Spotify</span>
              </Nav.Link>
              <Nav.Link className="d-flex flex-row align-items-center" href="#apple">
              <span className={styles.Apple}><FontAwesomeIcon icon={faApple} className="mr-2 p-2" width="30"/></span> <span className={styles.LinkText}>Download on Apple</span>
              </Nav.Link>
              <Nav.Link className="d-flex flex-row align-items-center" href="#facebook">
              <span className={styles.Facebook}><FontAwesomeIcon icon={faFacebook} className="mr-2 p-2" width="30"/></span> <span className={styles.LinkText}>Find us on Facebook</span>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;

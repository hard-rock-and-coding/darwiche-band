import React from "react";
import { Container, Navbar, Nav, Row, Col, Carousel} from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faFacebook, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="transparent" variant="dark">
      <Container>
        <Row>

          <Col xs={12}>
            <div className={styles.Videos}>
              <div className={styles.SevenSeals}>
              <h2 className={styles.MainHeading}>SIGN OF THE SEVEN SEALS</h2>
                <Nav className={styles.NavBar_Nav}>
                  <Nav.Link className="d-flex flex-row align-items-center" href="https://youtu.be/pyT0EyyEg04" target="_blank">
                    <span className={styles.Youtube}><FontAwesomeIcon icon={faYoutube} className="mr-2 p-2" width="30"/></span> 
                  </Nav.Link>
                  <Nav.Link className="d-flex flex-row align-items-center" href="#spotify" target="_blank">
                    <span className={styles.Spotify}><FontAwesomeIcon icon={faSpotify} className="mr-2 p-2 spotify" width="30"/></span> 
                  </Nav.Link>
                  <Nav.Link className="d-flex flex-row align-items-center" href="#apple" target="_blank">
                    <span className={styles.Apple}><FontAwesomeIcon icon={faApple} className="mr-2 p-2" width="30"/></span> 
                  </Nav.Link>
                  <Nav.Link className="d-flex flex-row align-items-center" href="#facebook" target="_blank">
                    <span className={styles.Facebook}><FontAwesomeIcon icon={faFacebook} className="mr-2 p-2" width="30"/></span> 
                  </Nav.Link>
                </Nav>
                <iframe width="320" height="175" src="https://www.youtube.com/embed/pyT0EyyEg04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className={styles.FollowTheHerd}>
              <h2 className={styles.MainHeading}>FOLLOW THE HERD</h2>
                <Nav className={styles.NavBar_Nav}>
                  <Nav.Link className="d-flex flex-row align-items-center" href="#youtube" target="_blank">
                    <span className={styles.Youtube}><FontAwesomeIcon icon={faYoutube} className="mr-2 p-2" width="30"/></span>
                  </Nav.Link>
                  <Nav.Link className="d-flex flex-row align-items-center" href="#spotify" target="_blank">
                    <span className={styles.Spotify}><FontAwesomeIcon icon={faSpotify} className="mr-2 p-2 spotify" width="30"/></span>
                  </Nav.Link>
                  <Nav.Link className="d-flex flex-row align-items-center" href="#apple" target="_blank">
                    <span className={styles.Apple}><FontAwesomeIcon icon={faApple} className="mr-2 p-2" width="30"/></span>
                  </Nav.Link>
                  <Nav.Link className="d-flex flex-row align-items-center" href="#facebook" target="_blank">
                    <span className={styles.Facebook}><FontAwesomeIcon icon={faFacebook} className="mr-2 p-2" width="30"/></span>
                  </Nav.Link>
                </Nav>
                <iframe width="320" height="175" src="https://www.youtube.com/embed/OEMh2b8wu6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;

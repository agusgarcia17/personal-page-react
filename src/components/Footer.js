import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer (){

    return(
        <footer className='mt-5'>
            <Container fluid >
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 font-pagina d-flex justify-content-center" md={12} >
                        <a href="https://www.linkedin.com/in/maria-agustina-garcia" className="p-3 linkedin social-icon" title="Linkedin">
                            <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                                        </a>
                        <a href="https://github.com/agusgarcia17" className="p-3 github social-icon" title="Github">
                            <FontAwesomeIcon icon={faGithub} size="3x"/>
                                        </a>
                        <a href="https://twitter.com/agus_garcia17" className="p-3" title="Twitter">
                            <FontAwesomeIcon icon={faTwitter} size="3x" className='twitter social-icon' />
                                        </a>
                        <a href="https://www.facebook.com/ma.garcia17" className="p-3 facebook social-icon" title='Facebook'>
                            <FontAwesomeIcon icon={faFacebook} size="3x"/>
                                        </a>
                        <a href="https://www.instagram.com/agusgarcia17" className="p-3 instagram social-icon" title="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size="3x"/>
                                        </a>
                    
                    </Col>
                </Row>
            </Container>

        </footer>
    )

}

export default Footer;
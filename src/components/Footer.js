import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
            redes: [
                {
                    id: 0,
                    title: 'Linkedin', 
                    link: 'https://www.linkedin.com/in/maria-agustina-garcia',
                    icon: faLinkedin 
                },
                {
                    id: 1,
                    title: 'Github', 
                    link: 'https://github.com/agusgarcia17',
                    icon: faGithub 
            },
            {
                id: 2,
                    title: 'Twitter', 
                    link: 'https://twitter.com/agus_garcia17', 
                    icon: faTwitter
            },
             {
                id: 3,
                    title: 'Facebook', 
                    link: 'https://www.facebook.com/ma.garcia17', 
                    icon: faFacebook
            },
            {
                id: 4,
                    title: 'Instagram', 
                    link: 'https://www.instagram.com/agusgarcia17',
                    icon: faInstagram
            },
        ]
        }
      }
 



render(){

    return (
        <footer className='mt-5'>
            <Container fluid >
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 font-pagina d-flex justify-content-center" md={12} > 

                        {this.state.redes.map(item => {
                            return <a href={item.link} className={`p-3 social-icon ${item.title}`}  key={item.id} title={item.title}>
                            <FontAwesomeIcon icon={item.icon} size="3x"/>
                                        </a>
                                        })}
                    </Col>
                </Row>
            </Container>

        </footer>
    )

}
}

export default Footer;
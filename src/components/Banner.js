import React from 'react';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap'; 

 
function Banner (props){

    return(
        <Jumbotron  fluid className= 'jumbotronCustom p-5' >
            <Container fluid>
                <Row className= 'banner justify-content-center py-5'>
                    <Col md={8} sm={12} >
                        {props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1> }
                        {props.subtitle && <h3 className='display-4 font-weight-light'>{props.subtitle}</h3> }
                        {props.content && <h4 className='lead font-weight-light'>{props.content}</h4> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Banner
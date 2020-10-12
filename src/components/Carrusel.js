import React from 'react';
import Card from './Card';
import {Container, Row } from 'react-bootstrap';
import proyectos from "../proyectos.json"

function Carrusel() {

        return (
            <Container fluid>
                <Row className='justify-content-around'>
                    {proyectos.map(item => {
                         return <Card item={item} key={item.id}/>
                    })}
                </Row>
            </Container>
        )
    }


export default Carrusel;

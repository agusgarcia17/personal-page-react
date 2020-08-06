import React from 'react';
import Card from './Card';
import ADA from '../img/proyectoFinal-ADA.jpg';
import PHP from '../img/Proyecto-PHP.jpg';
import WES from '../img/Catch-of-the-day-React.jpg';
import {Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props){
        super (props);
    
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Proyecto final de curso de PHP',
                    subTitle: 'Desarrollo en PHP con Laravel y base de datos',
                    imgSrc: PHP,
                    link: 'https://obscure-refuge-50354.herokuapp.com/',
                    selected: false
                },
                {
                id: 1,
                title: 'Proyecto final de Bootcamp en ADA',
                subTitle: 'Desarrollo en React y Node',
                imgSrc: ADA,
                link: 'https://github.com/agusgarcia17/proyecto-final',
                selected: false
            },
            {
                id: 2,
                title: 'Proyecto de curso de React',
                subTitle: 'Desarrollo en React y Firebase segun curso de Wes Bos',
                imgSrc: WES,
                link: 'https://github.com/agusgarcia17/catch-of-the-day',
                selected: false
            },
        ]

        }
    
    }


    
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id}/>
        })
    }



    render (){
        return (
            <Container fluid>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }



}

export default Carousel;
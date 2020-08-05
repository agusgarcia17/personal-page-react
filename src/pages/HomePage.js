import React from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';

function HomePage (props){

    return (
        <div>
        <Banner title={props.title} subtitle={props.subtitle} content={props.content}/>

        <Carousel/>
        </div>
    )


}


export default HomePage;
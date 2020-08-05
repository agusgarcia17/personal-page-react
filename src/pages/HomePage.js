import React from 'react';
import Banner from '../components/Banner';

function HomePage (props){

    return (
        <Banner title={props.title} subtitle={props.subtitle} content={props.content}/>
    )


}


export default HomePage;
import React, {useContext} from 'react';
import Banner from '../components/Banner';
import Carrusel from '../components/Carrusel';
import ProfileContext from "./../context/ProfileContext"

function HomePage (){

    const { home } = useContext(ProfileContext)

    return (
        <div>
        <Banner title={home.title} subtitle={home.subtitle} content={home.content}/>
        <Carrusel/>
        </div>
    )


}


export default HomePage;
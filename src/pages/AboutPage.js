import React, {useContext} from 'react';
import Banner from '../components/Banner'; 
import ProfileContext from "./../context/ProfileContext"

function AboutPage (){

    const { aboutme } = useContext(ProfileContext)

    return (
        <>
             <Banner title={aboutme.title} subtitle={aboutme.subtitle} content={aboutme.content}/>

        </>
    )


}


export default AboutPage;
import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo (props)  {

    const style = useSpring({
        opacity: 1, from: {opacity: 0}
    
    
    
    })

    return (
        <animated.div className='custom-card-info' style={style}>

            <p>{props.title}</p>
            <p>{props.subTitle}</p>
            <a href={props.link}  rel="noopener noreferrer" target='_blank'>View</a>
            

        </animated.div>
    )


}

export default CardInfo;
import React from 'react';

function CardInfo (props)  {



    return (
        <div className='custom-card-info' >

            <p className="custom-card-title">{props.title}</p>
            <p className="custom-card-subTitle">{props.subTitle}</p>
            <a href={props.link}  rel="noopener noreferrer" target='_blank'>Ir a proyecto</a>
            

        </div>
    )


}

export default CardInfo;
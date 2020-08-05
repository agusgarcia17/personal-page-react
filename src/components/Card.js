import React from 'react';
import CardInfo from './CardInfo';

function Card (props) {
    return (
       <div className='custom-card'>
           <img className='custom-card-image ' src={props.item.imgSrc} alt ={props.item.title}/>
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
       </div>
       
        )
}

export default Card;
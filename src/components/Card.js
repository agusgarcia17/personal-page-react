import React from 'react';
import CardInfo from './CardInfo';



function Card (props) {
    return (

       <div className='custom-card d-inline-block' onMouseOver={(e) => props.click(props.item)}>
           <img className='custom-card-image shadow-box-example ' src={props.item.imgSrc} alt ={props.item.title}/>
            {/* Conditional render */}
            {/* {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>} */}
          <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/> 
       </div>
       
        )
}

export default Card;
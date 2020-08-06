import React from 'react'; 
import styled from 'styled-components';

// Estilos 

const CustomCard = styled.div`
  margin: 20px;
` 

const Title = styled.p`
  font-size: 24px;
  margin: 0px;
` 

const SubTitle = styled.p`
  font-size: 16px;
  margin: 0px;
` 

 
function Card (props) { 

    return (

      <CustomCard className=' d-inline-block' >
        <img className='custom-card-image shadow-box-example' src={props.item.imgSrc} alt={props.item.title} />
        <div className='custom-card-info' >
          <Title  >{props.item.title}</Title>
          <SubTitle  >{props.item.subTitle}</SubTitle>
          <a href={props.item.link} rel="noopener noreferrer" target='_blank'>Ir a proyecto</a> 

        </div>
      </CustomCard>
       
        )
}

export default Card;
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
const CardImg = styled.img`
  border-radius: 10px;
  width: 480px;
  height: 300px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;

  &:hover {  
    box-shadow: 10px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 750px) {
      width: 320px; 
      height: 200px;  
}
  
`
const CardInfo = styled.div`
  min-height: 100px; 
  margin-top: 15px;
  @media (max-width: 750px) { 
    width: 320px;  
}
`


 
function Card (props) { 


  const {link, imgSrc, title, subTitle, backend } = props.item
    return (

      <CustomCard className=' d-inline-block' >
        <a href={link} rel="noopener noreferrer" target='_blank'><CardImg className=' shadow-box-example' src={imgSrc} alt={title} /></a>
        <CardInfo>
          <Title  >{title}</Title>
          <SubTitle  >{subTitle}</SubTitle>
          {backend ? 
          <> 
            <a href={backend} rel="noopener noreferrer" target='_blank'>Ir a backend</a> / 
            <a href={link} rel="noopener noreferrer" target='_blank'> Ir a frontend</a>
            </>
          : <a href={link} rel="noopener noreferrer" target='_blank'>Ir a proyecto</a> }

        </CardInfo>
      </CustomCard>
       
        )
}

export default Card;
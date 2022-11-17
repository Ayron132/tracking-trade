import React from 'react'

import { Container, Top, Bottom, Image, Title, Description, Evaluation } from './style'
import About from '../About';
import Rating from '../Rating';
import { useAuth } from '../../context/AuthContext';

type Props = {}

const Product = (props: Props) => {
  const { queryProducts } = useAuth();
  return (
    <Container className='mb-4'>
      <Top>
        <Title>{queryProducts && queryProducts.name}</Title>
        <Description>{queryProducts && queryProducts.brand}</Description>
        <Description>RRP: R$ {queryProducts && queryProducts.price.toLocaleString()}</Description>
      </Top>
      <Bottom>
        <Evaluation>
          <Description className='black'> Ranking: </Description> 
          <Rating value={queryProducts && queryProducts.ranking} />
          <About text="Lorem" position="left"/>
        </Evaluation>
        <Description className='black'>
          Last scraping: {queryProducts && queryProducts.lastScraping}
        </Description>
      </Bottom>
      <Image src={queryProducts && queryProducts.pictureUrl}/>
    </Container>
  )
}

export default Product
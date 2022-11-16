import React from 'react'

import { Container, Top, Bottom, Image, Title, Description, Evaluation } from './style'
import About from '../About';

import Rating from '../Rating';

type Props = {}

const Product = (props: Props) => {
  return (
    <Container className='mb-4'>
      <Top>
        <Title>S21 (128GB)</Title>
        <Description>SAMSUNG</Description>
        <Description>RRP: R$ 5.999</Description>
      </Top>
      <Bottom>
        <Evaluation>
          <Description className='black'> Ranking: </Description> 
          <Rating value={5} />
          <About text="Lorem" position="left"/>
        </Evaluation>
        <Description className='black'>
          Last scraping: 2022-01-06 09:01 AM
        </Description>
      </Bottom>
      <Image />
    </Container>
  )
}

export default Product
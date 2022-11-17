import React from 'react'

import { Container } from './style';

import Price from './Price';
import Temperature from './Temperature';
import Presence from './Presence';
import { useAuth } from '../../context/AuthContext';

type Props = {}

const Graphics = (props: Props) => {

  const { price } = useAuth();
  
  return (
    <Container>
        <Price data={price}/>
        <Price data={price}/>    
        <Temperature />
        <Temperature />
        <Presence />
        <Presence />
    </Container>
  )
}

export default Graphics
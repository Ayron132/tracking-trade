import React from 'react'

import { Container } from './style';

import Price from './Price';
import Temperature from './Temperature';
import Presence from './Presence';
import { useAuth } from '../../context/AuthContext';

type Props = {}

const Graphics = (props: Props) => {

  const { price, temperature } = useAuth();

  return (
    <Container>
        <Price data={price}/>
        <Price data={price}/>    
        <Temperature data={temperature}/>
        <Temperature data={temperature}/>
        <Presence />
        <Presence />
    </Container>
  )
}

export default Graphics
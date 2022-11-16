import React from 'react'

import { Container } from './style';

import Price from './Price';
import Temperature from './Temperature';
import Presence from './Presence';

type Props = {}

const Graphics = (props: Props) => {
  return (
    <Container>
        <Price />
        <Price />    
        <Temperature />
        <Temperature />
           
        <Presence />
        <Presence />
    </Container>
  )
}

export default Graphics
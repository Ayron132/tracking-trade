import React from 'react'

import { Container, Closed, Icon, Opened, Title, Options, Name } from './style';

type Props = {
  isMenuOpen: boolean;
}

const Menu = ({ isMenuOpen }: Props) => {
  return (
    <Container isMenuOpen={isMenuOpen}>
      {
        isMenuOpen ?
          <Opened>
            <Title>
              Menu
            </Title>
            <Options>
              <Icon className="opened" src='/house.svg' />
              <Name>
                Dashboard
              </Name>
            </Options>
          </Opened>
          :
          <Closed>
            <Icon src='/house.svg' />
          </Closed>
      }
    </Container>
  )
}

export default Menu
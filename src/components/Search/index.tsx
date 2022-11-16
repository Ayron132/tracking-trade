import React, { InputHTMLAttributes } from 'react'

import { Container, Icon, Input } from './style';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  color: string;
  value: string;
}

const Search = ({color, onChange, value} : InputProps) => {
  return (
    <Container className={color}>
        <Icon src='/search.svg'/>
        <Input value={value} onChange={onChange} placeholder='Search...'/>
    </Container>
  )
}

export default Search
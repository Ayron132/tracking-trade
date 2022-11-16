import React from 'react'

import { Container, Image } from './style';

type Props = {
    text: string;
    position: 'left' | 'right' | 'top' | 'bottom' | 'center';
}

const About = ({ text, position }: Props) => {

    return (
        <Container position={position} aria-label={text} >
            <Image src='/about.svg' />
        </Container>
    )
}

export default About
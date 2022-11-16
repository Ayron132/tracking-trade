import React, { useEffect, useState } from 'react'

import { Container, Image } from './style';

type Props = {
    value: number;
}

const Rating = ({ value }: Props) => {

    const [hasValue, setHasValue] = useState(false);	

    const [star, setStar] = useState({
        stars: [false, false, false, false, false],
    })

    useEffect(() => {
        let newStars = star;
        if (value >= 0) {
            for (var i = 0; i < value; i++) {
                newStars.stars[i] = true;
                
            }
            setHasValue(true);
        }
    }, [value])
    return (
        <Container>
            {hasValue && star.stars.map((star, index) =>
                <Image key={index} src={star ? '/star.svg' : '/starOff.svg'} />
            )}
        </Container>
    )
}

export default Rating
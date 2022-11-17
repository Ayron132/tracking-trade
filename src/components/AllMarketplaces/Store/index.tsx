import React, { useState, useEffect } from 'react'
import { isMapIterator } from 'util/types';

import { Main, Container, Checkbox, Logo } from './style'

type Props = {
    item: {
        name: string;
        pictureUrl: string;
    };
    selectedList: Array<{
        name: string;
    }>;
    setSelectedList: (list: Array<{
        name: string;
    }>) => void;
}

const Store = ({ item, setSelectedList, selectedList }: Props) => {
    const [isChecked, setIsChecked] = useState(false);

    const filterList = (list: { name: string }[], name: string) => {
        let newList = list.filter((item: { name: any; }) => (
            item.name !== name
        ))
        return newList
    }

    useEffect(() => {
        let List = selectedList.filter((object) => (
            object.name === item.name
        ))
        if (List.length >= 1) {
            setIsChecked(true)
        }
    }, [item.name, selectedList])

    const handleCheck = (e: { target: { name: any; checked: any; }; }) => {
        const name = e.target.name
        if (e.target.checked) {
            setIsChecked(!isChecked)
            setSelectedList([...selectedList, { name: name }])
        } else {
            setIsChecked(!isChecked)
            setSelectedList(filterList(selectedList, name))
        }
    }

    return (
        <Main>
            <Checkbox checked={isChecked} onChange={handleCheck} name={item.name} id={item.name} />
            <Container htmlFor={item.name} >
                <Logo src={item.pictureUrl}/>
                {item.name}
            </Container>
        </Main>
    )
}

export default Store
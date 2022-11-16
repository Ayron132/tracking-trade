import styled from "styled-components";

interface Props {
    position: "left" | "right" | "top" | "bottom" | "center";
}

export const Image = styled.img`
    width: 1rem;
    height: 1rem;
    margin-left: 5px;
    margin-right: 5px;
`
export const Container = styled.div<Props>`

    position: relative;
    cursor: pointer;
    ${props => props.position === "right" ?
        `
    &::after{
        opacity: 0;
        pointer-events: none;
        transition: 0.5s;
        min-width: 15rem;
        content: attr(aria-label);
        color: #fff;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 5px;
        padding: 5px 10px;
        position: absolute;
        z-index: 101;
    }  
    &:hover::after{
        opacity: 1;
        pointer-events: all;
    }`
    :
    `
     &::before{
        opacity: 0;
        pointer-events: none;
        transition: 0.5s;
        min-width: 15rem;
        left: -15rem;
        content: attr(aria-label);
        color: #fff;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 5px;
        padding: 5px 10px;
        position: absolute;
        z-index: 101;
    }  
    &:hover::before{
        opacity: 1;
        pointer-events: all;
    }`
    }
`
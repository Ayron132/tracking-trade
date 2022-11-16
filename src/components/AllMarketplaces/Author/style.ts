import styled from "styled-components";

export const Name = styled.span`
    font-size: 18px;
    color: #808080;
    display: flex;
    align-items: center;
    font-weight: 500;
    &.activate{
        color: #000;
    }
        
`
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`
export const Container = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    cursor: pointer;
    color: #808080;
    font-weight: 500;
    font-size: 18px;
    &::before{
        content: "";
        width: 20px;
        height: 20px;
        border: 1px solid #000;
        margin-right: 20px;
        transition: .3s all ease;
        
    }
    ${Checkbox}:checked + &{
        color: #000;
    }
    ${Checkbox}:checked + &::before{
        width: 20px;
        height: 20px;
        background-image: url("/checked.svg");
        background-repeat: no-repeat;
        background-position: center center;
        border: 2px solid #1E88E5;
    }
`
export const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 30px;
`
export const Logo = styled.div`
    width: 4rem;
    height: 4rem;
    margin-right: 20px;
    background-image: url("/americanas.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const Main = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    & + &{  
        border-bottom: 1px solid #C8C8C8;
        border-top: 1px solid #C8C8C8;
    }
 
`
import styled from 'styled-components';



export const Container = styled.div`
    height: 40px;

    background-color: rgb(246,246,249);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 10px;
    &.white{
        background-color: transparent;
        border: 1px solid rgb(220,220,220)  ;

    }
`
export const Icon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 10px;
`
export const Input = styled.input`
    border: none;
    width: 100%;
    background-color: transparent;
    outline: none;
`
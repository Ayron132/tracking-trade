import styled from "styled-components";

interface Props {
    activeYear: boolean;
}

export const Container = styled.div<Props>`
    width: 15rem;
    height: ${props => props.activeYear ? '18rem' : '15rem'};
    background-color: #fff;
`
export const Header = styled.div<Props>`
    width: 100%;
    height: ${props => props.activeYear ? '6.75rem' : '3.75rem'};
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgb(43,114,232);
`
export const YearAndMonth = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Icon = styled.img`
    width: 15px;
    height: 15px;
    cursor: pointer;
    &.right{
        transform: rotate(180deg);
    }
   
`
export const IconYear = styled.img<Props>`
    margin-right: 5px;
    width: 10px;
    height: 10px;
    transform: rotate(${props => props.activeYear ? '180deg' : '0deg'});
`
export const Month = styled.h6`
    color: #fff;
`
export const SelectYear = styled.h6`
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const Days = styled.div`
    display: grid;
    grid-template-columns: 25px 25px 25px 25px 25px 25px 25px;
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Day = styled.p`
    color: #fff;
    display: flex;
    align-items: center;
`
export const Main = styled.div`
    display: grid;
    grid-template-columns: 25px 25px 25px 25px 25px 25px 25px;
    grid-template-rows: 25px 25px 25px 25px 25px 25px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    height: 11.25rem;
    box-sizing: border-box;
`
export const Number = styled.p`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover{
        background-color: rgb(43,114,232);
        border-radius: 50%;
        color: #fff;
    }
    &.selected{
        background-color: rgb(43,114,232);
        border-radius: 50%;
        color: #fff;
    }
`
export const Year = styled.div`
    height: 50px;
`
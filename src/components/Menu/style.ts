import styled from 'styled-components';

interface Props{
    isMenuOpen: boolean;
}
export const Container = styled.div<Props>`
    display: none;
    transition: all 0.5s ease-in-out;
    min-height: 100vh;
    width: ${props => props.isMenuOpen ? '15rem' : '5rem'};
    background-color: rgb(42,48,66);
    @media (min-width: 576px) {
        display: block;
    }
`
export const Closed = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 1.5rem;
`
export const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    &.opened{
        width: 1.1rem;
        height: 1.1rem;
        margin-right: 5px;
    }
`
export const Title = styled.p`
    color: rgb(95,102,124);
    margin-bottom: 10px;
`
export const Options = styled.div`
    display: flex;
    align-items: stretch;

`
export const Name = styled.p`
    color: #fff;
    transition: transform .35s ease-in-out;
`
export const Opened = styled.div`
    transition: opacity 2s;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 3rem;
    padding-left: 0.5rem;
    @media(min-width: 700px){
        padding-left: 1rem;
    }
`
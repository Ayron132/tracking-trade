import styled from 'styled-components';

interface Props{
    src: string;
}

export const Image = styled.div<Props>`
    width: 100%;
    height: 20vh;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media(min-width: 768px){
        height: 100vh;
    }
`
export const Container = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10%;
    @media(min-width: 768px){
        padding: 0%;
        justify-content: center;
    }
`
export const Content = styled.div`
    width: 80%;
    @media(min-width: 768px){
        width: 50%;
    }
`
export const Title = styled.h4`
    color: #387AE7;
    margin-bottom: 1.5rem;
`
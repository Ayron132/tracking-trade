import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
    @media(min-width: 768px){
        margin-left: 1.5rem;
        grid-template-columns: 1fr 1fr;
    }
`

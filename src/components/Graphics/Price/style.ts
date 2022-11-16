import styled from "styled-components";

export const Container = styled.div`
    border-radius: 8px;
    padding: 1.5rem;
    background-color: white;
    height: 100%;
    width: 100%;
    overflow: auto;
    overflow-y: hidden;
`

export const Content = styled.div`
    width: 100%;
    overflow: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar{
        height: 5px;
        
    }
    &::-webkit-scrollbar-thumb{
        background-color: #76798E;
        border-radius: 20px;
    }  
`
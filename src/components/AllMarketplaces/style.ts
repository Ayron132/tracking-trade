import styled from "styled-components";

export const Container = styled.div`
    height: 70vh;
    margin-top: 1.5rem;
    border-top: 1px solid #C8C8C8;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #76798E;
        border-radius: 20px;
    }
`
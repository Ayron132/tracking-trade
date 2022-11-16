import styled from "styled-components";

export const AuthorContainer = styled.div`
    margin-top: 1.5rem;
    border-top: 1px solid #C8C8C8;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: rgba(220,220,220, 0.5);
        border-radius: 20px;
    }
`
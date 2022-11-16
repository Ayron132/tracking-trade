import styled from 'styled-components';


export const Container = styled.div`
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    background-color: rgb(246,246,249);
    &::-webkit-scrollbar{
    width: 5px;
    
    }
    &::-webkit-scrollbar-thumb{
        background-color: #76798E;
        border-radius: 20px;
    }  
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: rgb(246,246,249);
`

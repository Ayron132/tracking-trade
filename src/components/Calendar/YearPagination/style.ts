import styled from "styled-components";

interface Props{
    isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Icon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 10px;
    cursor: pointer;
    &.right{
        margin-right: 0px;
        margin-left: 10px;
        transform: rotate(180deg);
    }
`
export const Item = styled.p<Props>`
    color: #fff;
    font-size: ${props => props.isActive ? '1rem' : '0.7rem'};
    cursor: pointer;

    &:hover{
        font-size: 1rem;
    }
    & + &{
        margin-left: 10px;
    }
`
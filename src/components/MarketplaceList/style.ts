import styled from 'styled-components';

interface Props {
    colorPercentage: number;
}

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 1.5rem - 15rem);
  border-radius: 8px;
  background-color: #fff;
  padding: 20px;
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Icon = styled.img`
    width: 1.2rem;
    height: 1.2rem;
`
export const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Percentage = styled.div<Props>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-weight: bold;
    background-color: rgba(255, 99, 71, ${props => props.colorPercentage});
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 992px){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`
export const PriceAndDate = styled.div`
    display: flex;
    flex-direction: column;
    & + &{
        margin-left: 10px;
    }
`;

export const Select = styled.select`
    height: 100%;
    background-color: #0d6efd;
    color: white;
    & option{
        background-color: white;
        color: #000;
        border: none;
    }

    background-image:url("/arrowBottomWhite.svg") !important;
    background-position:calc(100% - 0.8rem);
    background-size: 0.8rem;
    background-repeat: no-repeat;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
`
export const Table = styled.div`
   overflow: auto;
    &::-webkit-scrollbar{
    height: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #76798E;
        border-radius: 20px;
    }        
`
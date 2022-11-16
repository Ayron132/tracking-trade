import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  height: 15rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`
export const Top = styled.div`
  width: 100%;
  height: 50%;
  background-color: rgb(35,96,195);
  padding: 10px;
`
export const Bottom = styled.div`
  padding: 10px;
  width: 100%;
  height: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`
export const Image = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #fff;
  background-image: url("/phone.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  margin-left: 10px;
`
export const Title = styled.h4`
  font-size: 0.9rem;
  color: #fff;
`
export const Description = styled.p`
  font-size: 0.8rem;
  color: #fff;
  & + &{
    margin-top: 0.5rem;
  }
  &.black{
    color: #000;  
  }
`
export const Evaluation = styled.div`
  display: flex;
  align-items: center;
  
`
export const Scraping = styled.p`
  font-size: 0.8rem;
`
import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
`
export const MenuAndSearch = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`

export const Icon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 20px;
    cursor: pointer;
    &.profile{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
    }
    &.logout{
        margin-right: 10px;
    }
   
`
export const ButtonIcon = styled.img`
    width: 10px;
    height: 10px;
    margin-left: 5px;
`
export const FullscreenAndProfile = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    &:focus {
        outline: none;
    }
`
export const Name = styled.p`
    display: none;
    @media(min-width: 500px){
        display: block;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    cursor: pointer;
`

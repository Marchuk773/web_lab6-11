import styled from 'styled-components'
import { mint, purple, yellow, murrey, lightBlue } from '../styles/colors'

export const CartPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${murrey};
    h1 {
        font-size: 48px;
    }
`

export const ItemContainer = styled.div`
    height: 160px;
    width: 90%;
    margin: 22px 0;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${mint};
    color: ${purple};
    h1 {
        width: 500px;
        margin: 0 160px 0 30px;
        font-size: 36px;
    }
    h2 {
        margin: 0 5px;
        font-size: 32px;
    }
`

export const CountContainer = styled.button`
    background-color: ${yellow};
    border-color: ${yellow};
    color: ${purple};
    border-radius: 12px;
    font-size: 36px;
    font-weight: 600;
    width: 50px;
    height: 50px;
    text-align: center;
`

export const DeleteButton = styled.button`
    width: 160px;
    height: 50px;
    margin: 0 48px 0 16px;
    border-radius: 12px;
    font-size: 26px;
    font-weight: 700;
    background-color: ${murrey};
    border-color: ${murrey};
    color: ${lightBlue};
`

export const NavButtonsContainer = styled.div`
    width: 90%;
    margin: 48px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const NavButton = styled.button`
    width: 210px;
    height: 70px;
    border-radius: 12px;
    font-size: 26px;
    font-weight: 700;
    background-color: ${yellow};
    border-color: ${yellow};
    color: ${purple};
`

export const EmptyStyle = styled.h1`
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    font-weight: 700;
    color: ${yellow};
`
import styled from 'styled-components'
import { mint, purple, yellow } from './colors'

export const UpperContainer = styled.div`
    width: 80%;
    margin: 5% 8%;
    padding: 2%;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    background-color: ${mint};
`

export const ItemInfo = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${purple};
    h1 {
        margin: 0;
        font-size: 48px;
        font-weight: 700;
    }
    div {
        font-size: 24px;
    }
`

export const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5%;
    h1 {
        margin: 0;
        color: ${yellow};
        font-size: 48px;
        font-weight: 700;
    }
`

export const ButtonsContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    width: 180px;
    height: 60px;
    border-radius: 20px;
    font-size: 26px;
    font-weight: 700;
    background-color: ${yellow};
    border-color: ${yellow};
    color: ${purple};
`
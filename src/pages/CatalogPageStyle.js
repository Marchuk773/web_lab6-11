import styled from 'styled-components'
import { purple, skyBlue, lightBlue, yellow, murrey } from '../styles/colors'

export const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ItemContainer = styled.div`
    display: flex;
    background-color: ${lightBlue};
    border-radius: 16px;
    height: 600px;
    padding: 0.7% 0;
    width: 30%;
    margin: 1.5% 1.66%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: ${purple};
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    h1 {
        font-size: 38px;
        margin: 0;
    }
    div {
        display: flex;
        align-items: center;
    }
    button {
        background-color: ${yellow};
        border-color: ${yellow};
        color: ${purple};
        width: 275px;
        height: 85px;
        font-size: 24px;
        font-weight: 600;
        border-radius: 12px;
    }
`

export const PriceContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    h1 {
        font-size: 32px;
        margin: 0 0 10px 0;  
    }
`

export const ViewMore = styled.button`
    width: 26%;
    height: 90px;
    margin: 4% 37% 8% 37%;
    padding: 8px 10px;
    border-radius: 20px;
    font-size: 32px;
    font-weight: 700;
    background-color: ${murrey};
    border-color: ${murrey};
    color: ${skyBlue};
`
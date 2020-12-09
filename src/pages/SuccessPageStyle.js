import styled from 'styled-components'
import { yellow, skyBlue, murrey } from '../styles/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    h1 {
        color: ${yellow};
        font-size: 60px;
        margin: 5px 0;
    }
    div {
        color: ${yellow};
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    button {
        width: 300px;
        height: 90px;
        margin: 20px 0 40px 0;
        padding: 8px 10px;
        border-radius: 20px;
        font-size: 32px;
        font-weight: 700;
        background-color: ${murrey};
        border-color: ${murrey};
        color: ${skyBlue};
    }
`
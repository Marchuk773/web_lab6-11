import styled from 'styled-components'
import { lightBlue, yellow, purple, skyBlue } from '../styles/colors'

export const HeaderWrapper = styled.header`
    height: 70px;
    background-color: ${lightBlue};
    padding-left: 5%;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`

export const HeaderNav = styled.div`
    margin-left: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const HeaderNavButtonStyle = styled.button`
    width: 160px;
    margin: 0 20px;
    padding: 8px 10px;
    border-radius: 20px;
    background-color: ${yellow};
    border-color: ${yellow};
    color: ${purple};
    font-size: 18px;
`

export const SignOutStyle = styled.button`
    width: 160px;
    height: 41.6px;
    margin-left: 160px;
    padding: 8px 10px;
    border-radius: 20px;
    background-color: ${skyBlue};
    border-color: ${skyBlue};
    color: ${purple};
    font-size: 18px;
`
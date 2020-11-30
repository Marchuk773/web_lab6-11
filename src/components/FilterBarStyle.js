import styled from 'styled-components'
import { mint, skyBlue, purple, yellow } from '../styles/colors'

export const FilterBarContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    background-color: ${mint};
`

export const SelectsContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const SearchBoxContainer = styled.div`
    margin-right: 190px;
`

export const InputStyle = styled.input`
    height: 32px;
    width: 190px;
    margin-right: 24px;
    font-size: 16px;
    padding: 0 10px;
    color: ${purple};
    background-color: ${skyBlue};
    border-color: ${skyBlue};
    border-radius: 12px;
`

export const ButtonStyle = styled.button`
    height: 36px;
    width: 120px;
    border-radius: 12px;
    font-size: 16px;
    color: ${purple};
    background-color: ${yellow};
    border-color: ${yellow};
`
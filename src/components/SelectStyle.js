import styled from 'styled-components'
import { purple, skyBlue } from '../styles/colors'

export const SelectForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SelectLabel = styled.label`
    color: ${purple};
    font-size: 42px;
    margin-right: 20px;
`

export const SelectStyle = styled.select`
    height: 48px;
    width: 140px;
    border-radius: 12px;
    color: ${purple};
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    background-color: ${skyBlue};
    border-color: ${skyBlue};
    -webkit-appearance: none;
`
import styled from 'styled-components'
import { purple, skyBlue } from './colors'

export const SelectForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SelectLabel = styled.label`
    color: ${purple};
    font-size: 36px;
    margin-right: 20px;
`

export const SelectStyle = styled.select`
    height: 36px;
    width: 90px;
    border-radius: 12px;
    color: ${purple};
    text-align: center;
    font-size: 16px;
    background-color: ${skyBlue};
    border-color: ${skyBlue};
    -webkit-appearance: none;
`
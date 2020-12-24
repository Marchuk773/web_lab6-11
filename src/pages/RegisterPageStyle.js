import styled from 'styled-components'
import { purple, lightBlue, skyBlue, murrey } from '../styles/colors'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: ${skyBlue};
        font-size: 48px;
        font-weight: 700;
    }
`

export const BottomMessage = styled.span`
    h2 { 
        color: ${skyBlue};
        font-size: 36px;
        font-weight: 700;
        margin: 0;
    }
    width: 460px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${purple};
    font-size: 36px;
    font-weight: 700;

`

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 300px;
    background-color: ${lightBlue};
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 30px;
`

export const Field = styled.div`
    display: flex;
    height: 150px;
    width: 40%;
    flex-direction: column;
`

export const Label = styled.label`
    color: ${purple};
    font-size: 28px;
    font-weight: 700;
`

export const Input = styled.input`
    -webkit-appearance: none;
    height: 36px;
    background-color: ${skyBlue};
    border-color: ${skyBlue};
    border-radius: 12px;
    padding: 0 8px;
    color: ${purple};
    font-size: 20px;
`

export const Button = styled.button`
    width: 26%;
    height: 90px;
    padding: 8px 10px;
    margin: 30px 0;
    border-radius: 16px;
    font-size: 32px;
    font-weight: 700;
    background-color: ${murrey};
    border-color: ${murrey};
    color: ${skyBlue};
`

export const Error = styled.div`
    color: ${murrey};
    margin-left: 6px;
    font-size: 18px;
    font-weight: 600;
`
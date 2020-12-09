import styled from 'styled-components'
import { purple, mint, lightBlue, skyBlue, murrey } from '../styles/colors'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: ${murrey};
        font-size: 48px;
        font-weight: 700;
    }
`

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 400px;
    background-color: ${mint};
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 80px;
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
    background-color: ${lightBlue};
    border-color: ${lightBlue};
    border-radius: 12px;
    padding: 0 8px;
    color: ${purple};
    font-size: 20px;
`

export const Button = styled.button`
    width: 26%;
    height: 60px;
    padding: 8px 10px;
    margin: 0 90px 50px 0;
    border-radius: 16px;
    font-size: 32px;
    font-weight: 700;
    background-color: ${murrey};
    border-color: ${murrey};
    color: ${skyBlue};
`

export const Error = styled.span`
    color: ${murrey};
    margin-left: 6px;
    font-size: 18px;
    font-weight: 600;
`
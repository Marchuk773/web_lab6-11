import styled from 'styled-components'
import { purple, lightBlue } from '../styles/colors'

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${lightBlue};
    width: 90%;
    padding: 1% 5% 0 5%;
`

export const FooterContent = styled.div`
    padding-bottom: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${purple};
`

export const FooterText = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    color: ${purple};
    font-size: 20px;
    h1 {
        font-size: 48px;
    }
`

export const LinksContainer = styled.div`
    width: 30%;
`

export const FooterCopyright = styled.div`
    padding: 48px 0;
    color: ${purple};
    font-size: 32px;
    font-weight: 600;
`
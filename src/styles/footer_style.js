import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6688cc;
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
    border-bottom: 2px solid #152733;
`

export const FooterText = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    color: #152733;
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
    color: #152733;
    font-size: 32px;
    font-weight: 600;
`
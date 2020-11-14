import styled from 'styled-components'

export const MainItemStyle = styled.div`
    background-color: #169990;
    height: 400px;
    border-radius: 16px;
    margin: 50px 20px;
    width: 100%auto;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-around;
`;

export const MainItemInfo = styled.div`
    width: 70%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    font-size: 20px;
    color: #1a1c3b;
    h1 {
       font-size: 36px;
       color: #1a1c3b;
    }
`
export const ImageContainer = styled.div`
    width: 30%;
    padding: 50px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20%;
    width: 80%;
    padding-right: 10%;
    font-size: 32px;
    font-weight: 700;
    button {
        height: 80%;
        width: 30%;
        background-color: #28559a;
        border-color: #28559a;
        color: #a3d5f1;
        font-size: 28px;
        font-weight: 600;
        border-radius: 16px;
    }
`
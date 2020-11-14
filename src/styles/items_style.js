import styled from 'styled-components'

export const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ItemContainer = styled.div`
    display: flex;
    background-color: #6688cc;
    border-radius: 16px;
    height: 400px;
    padding: 0.7% 0;
    width: 23%;
    margin: 1.5% 1%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #0d1e29;
    font-size: 22px;
    font-weight: 500;
    h1 {
        font-size: 38px;
        margin: 0;
    }
    div {
        display: flex;
        align-items: center;
        text-align: center;
    }
    h2 {
        font-size: 24px;
        margin: 0 0 10px 0;  
    }
    button {
        background-color: #ffcf43;
        border-color: #ffcf43;
        color: #1f3644;
        width: 60%;
        height: 14%;
        font-size: 24px;
        font-weight: 600;
        border-radius: 12px;
    }
`

export const ViewMore = styled.button`
    width: 26%;
    height: 90px;
    margin: 4% 37% 8% 37%;
    padding: 8px 10px;
    border-radius: 20px;
    font-size: 32px;
    font-weight: 700;
    background-color: #9b1b3b;
    border-color: #9b1b3b;
    color: #a3d5f1;
`
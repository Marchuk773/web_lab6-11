import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    height: 60px;
    background-color: #6688cc;
    padding-left: 5%;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`;

export const HeaderNav = styled.div`
    margin-left: 380px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderNavButtonStyle = styled.button`
    width: 160px;
    margin: 0 20px;
    padding: 8px 10px;
    border-radius: 20px;
    background-color: #ffcf43;
    border-color: #ffcf43;
    color: #1d2d4d;
    font-size: 18px;
`

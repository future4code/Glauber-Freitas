import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top:150px;
    justify-content: center;
    width: 100vw;

`
export const AppContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const Header = styled.div`
    position: fixed;
    top:0;
    left:0;
    background-color: white;
    width: 100vw;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    z-index: 1;
`
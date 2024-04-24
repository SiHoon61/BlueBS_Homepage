import styled from "styled-components";

export const DataBox = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 400px;
    width: 450px;
    border-radius: 10px;
    margin-bottom: 50px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 0 15px 35px;
    &:hover{
        filter: brightness(70%);
    }
    transition: filter 0.3s;
    cursor: pointer;
    @media (max-width: 1600px) {
        width: 350px;
        height: 350px;
    }
    @media (max-width: 1450px) {
        width: 300px;
        height: 300px;
    }
    @media (max-width: 1250px) {
        width: 45%;
        height: auto;
    }
    @media (max-width: 750px) {
        margin: 0 10px 35px;
    }
    @media (max-width: 750px) {
        width: 100%;
    }

`

export const DataImgs = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0;
`

export const DataTitle = styled.div`
    margin: 10px 10px 30px 10px;
    height: 40px;
    font-size: 18px;
    font-family: var(--font-sansMedium);
    @media (max-width: 1450px) {
        font-size: 16px;
    }
    @media (max-width: 1000px) {
        font-size: 14px;
    }
`

export const DataDate = styled.div`
    position: absolute;
    color: #717171;
    font-size: 14px;
    bottom: 10px;
    left: 10px;
    @media (max-width: 1250px) {
        margin-top: 25px;
    }
`
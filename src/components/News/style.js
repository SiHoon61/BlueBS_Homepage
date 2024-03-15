import styled from "styled-components";

export const NewsBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 450px;
    border-radius: 10px;
    margin-bottom: 50px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    &:hover{
        filter: brightness(70%);
    }
    transition: all 0.3s;
    cursor: pointer;
`

export const NewsImgs = styled.img`
    width: 450px;
    height: 305px;
    border-radius: 10px 10px 0 0;
`

export const NewsTitle = styled.div`
    margin: 10px 0 30px 10px;
    font-size: 18px;
    font-family: var(--font-sansMedium);
`

export const NewsDate = styled.div`
    margin-left: 10px;
    color: #717171;
    font-size: 14px;
`
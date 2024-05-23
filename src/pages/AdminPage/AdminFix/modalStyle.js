import styled, { css, keyframes } from "styled-components";


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Modal = styled.div`
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${props => props.$show ? fadeIn : fadeOut} 0.3s forwards;
`
export const Content = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 6px;
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #A4A4A4;
    }
    width: 1350px;
    position: relative;
    background: white;
    padding: 60px 70px 70px 70px;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${props => props.$show ? fadeIn : fadeOut} 0.2s forwards;
`

export const CloseButton = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

export const Date = styled.div`
    font-size: 16px;
    color: #717171;
    width: 100%;
    margin-top: 15px;
`


export const Title = styled.div`
    display: flex;
    font-size: 30px;
    font-family: var(--font-sansBold);
    margin: 30px auto 50px;
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
`

export const InquiryForm = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
    font-size: 20px;
    font-family: var(--font-sansBold);  
`

export const KeyText = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: var(--font-sansBold);  
    width: 130px;  
    margin-right: 50px;
`

export const InputBox = styled.input`
    display: flex;
    align-items: center;
    padding-left: 15px;
    border: 1.5px solid grey;
    width: 800px;
    height: 50px;
    font-size: 16px;
`

export const BodyTextarea = styled.textarea`
    resize: none;
    width: 800px;
    height: 200px;
    border: 1.5px solid grey;
    padding: 10px;
    font-size: 16px;
`

export const Submit = styled.div`
    margin: 10px auto 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: white;
    width: 280px;
    height: 60px;
    cursor: pointer;
    background-color: #0052A7;
`

export const ExistFile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #434343;
    //border: 1px solid black;
`

export const ExistImg = styled.img`
    width: 200px;
    margin-left: 20px;
    height: auto;
`
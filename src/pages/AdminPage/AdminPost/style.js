import styled from "styled-components";

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
    width: 120px;  
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

export const FileBox = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
    font-size: 20px;
    font-family: var(--font-sansBold);  
`

export const Submit = styled.div`
    margin: 10px auto;
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
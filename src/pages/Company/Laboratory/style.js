import styled from "styled-components";

import laboratory from '../../../assets/Company/laboratory.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${laboratory});
    background-color: rgba(36, 36, 36, 0.40);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

export const TitleTextBox = styled.div`
    padding-top: 230px;
    vertical-align: baseline;
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    color: white;
    font-size: 14px;
    font-family: var(--font-sansRegular);
`

export const TitleMainText = styled.div`
    font-size: 96px;
    font-family: var(--font-sansBold);
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
`

export const SubColumnContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


export const SubLargeTitle = styled.div`
    margin-top: 10px;
    width: 1500px;
    font-size: 48px;
    font-family: var(--font-sansBold);
`

export const SubTitle = styled.div`
    margin-top: 10px;
    width: 1500px;
    font-size: 40px;
    font-family: var(--font-sansBold);
`
export const SubCenterTitle = styled.div`
    margin-top: 10px;
    width: 1500px;
    font-size: 40px;
    font-family: var(--font-sansBold);
    display: flex;
    justify-content: center;
`

export const FullSubContent = styled.div`
    width: 1500px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px; 
`
export const SubjectBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 1500px;
    margin-top: 35px;
`

export const Subject = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid #A0A0A0; 
    border-radius: 10px;
    font-family: var(--font-sansMedium);
    font-size: 22px;
    color: #313131;
    padding: 20px;
    width: 230px;
`
export const LabImgBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 1500px;
`

export const LabImg = styled.img`
    border-radius: 3px;
    width: 650px;
    margin-top: 20px;
`
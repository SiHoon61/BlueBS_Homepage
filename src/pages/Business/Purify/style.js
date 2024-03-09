import styled from "styled-components";

//img
import purify from '../../../assets/Business/Purify/purify.png'
import purifyBody from '../../../assets/Business/Purify/purifyBody.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${purify});
    background-color: rgba(36, 36, 36, 0.40);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

export const TitleTextBox = styled.div`
    padding-top: 200px;
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

export const SubLargeContainer = styled.div`
    margin: 0 auto 50px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const SubRowContainer = styled.div`
    align-items: flex-start;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
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

export const FullSubContent = styled.div`
    width: 1500px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px; 
`

export const BodyImg = styled.div`
    display: flex;
    height: 700px;
    width: 100%;
    background-image: url(${purifyBody});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: 150px;
`

export const PerformanceImgBox = styled.div`
    margin-top: 35px;
`

export const PerformanceVideo = styled.video`
    width: 1500px;
`

export const DescriptionBox = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding-left: 0px;
`

export const Description = styled.li`
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: var(--font-sansBold);
`

export const More = styled.div`
    width: 150px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #000;
`
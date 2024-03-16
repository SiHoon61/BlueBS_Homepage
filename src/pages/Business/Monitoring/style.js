import styled from "styled-components";

//img
import monitoring from '../../../assets/Business/Monitoring/Monitoring.png'


export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-image: url(${monitoring});
    background-blend-mode: multiply;
    background-color: rgba(36, 36, 36, 0.45);
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
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: 150px;
`
export const FullImg = styled.img`
    margin-top: 35px;
    width: 1500px;
`

export const ImgBox = styled.div`
    width: 1500px;
    display: flex;
    justify-content: space-between;
`

export const SubImgContainer = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1500px;
`

export const TechImg = styled.img`
    width: 480px;
    height: 300px;
    border-radius: 5px;
    margin-bottom: 5px;
`


export const ImgDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 18px;
    align-items: center;
`

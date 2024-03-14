import styled from "styled-components";

//img
import leachate from '../../../assets/Business/Leachate/Leachate.png'
import leachateBody from '../../../assets/Business/Leachate/LeachateBody.png'
import arrow from '../../../assets/Business/arrow.svg'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-image: url(${leachate});
    background-blend-mode: multiply;
    background-color: rgba(36, 36, 36, 0.4);
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
    background-image: url(${leachateBody});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: 150px;
`

export const PerformanceContent = styled.div`
    width: 1500px;
    display: flex;
    align-items: center;
    font-size: 28px;
    font-family: var(--font-sansMedium);
    color: #313131;
    line-height: 45px; 
`

export const PerformanceImgBox = styled.div`
    margin-top: 35px;
`

export const PerformanceImg = styled.img`
    width: 1500px;
`

export const DescriptionBox = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding-left: 0px;
    margin: 10px 0px;
`

export const Description = styled.li`
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: var(--font-sansBold);
`

export const DescriptionStyle = styled.span`
    margin-left: 25px;
    font-size: 18px;
    font-family: var(--font-sansMedium);
`

export const More = styled.div`
    display: flex;
    width: 130px;
    height: 26px;
    border-radius: 20px;
    border: 2px solid #000;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 15px;
`
export const Arrow = styled.img.attrs({
    src: arrow,
    alt: 'arrow'
})`
    margin-left: 10px;
    width: 15px;
    height: 15px;
`

export const SubImgContainer = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1500px;
`

export const TechImg = styled.img`
    width: 350px;
    height: 300px;
    border-radius: 5px;
    margin-bottom: 5px;
`

export const EmptyBox = styled.div`
    width: 350px;
    height: 350px;
`

export const ImgDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 18px;
    align-items: center;
`

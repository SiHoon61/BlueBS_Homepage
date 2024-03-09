import styled from "styled-components";

//img
import company from '../../../assets/Company/company.png'
import onlyLogo from '../../../assets/Company/onlyLogo.png'
import line from '../../../assets/Company/line4.svg'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${company});
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
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    width: 100%;
    overflow: hidden;
`

export const HistoryStart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 2400px;
    height: 180px;
    max-width: 1800px;
    margin-bottom: 40px;
`

export const LogoImg = styled.img.attrs({
    src: onlyLogo,
    alt: 'onlyLogo'
})`
    margin-right: 10px;
    width: 100px;
`

export const BigYear = styled.div`
    font-family: var(--font-sansBold);
    font-size: 40px;
    margin: 20px;
`

export const Bigcontent = styled.div`
    font-family: var(--font-sansMedium);
    font-size: 20px;
    margin-top: 35px;
    line-height: 38px;
`

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 700px;
    max-width: 1800px;
`

export const MiddleHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
`

export const Year = styled.div`
    font-size: 40px;
    font-family: var(--font-sansBold);
    display: flex;
`

export const Month = styled.div`
    font-family: var(--font-sansBold);
    font-size: 22px;
    margin-right: 30px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    font-family: var(--font-sansMedium);
    font-size: 20px;
    margin-left: 160px;
    margin-bottom: 20px;
`

export const LineImg = styled.img.attrs({
    src: line,
    alt: 'line'
})`
    margin-top: 20px;
    margin-left: 30px;
    height: 20px;
`

export const ImgContainer = styled.div`
    color: #313131;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    position: absolute;
    margin-top: 50px;
    margin-right: 50px;
    top: ${props => props.$isTop}px;
    right: 53%;
    font-size: 32px;
`

export const ImgDescription = styled.div`
    font-size: 18px;
    font-family: var(--font-sansMedium);
`

export const HistoryImg = styled.img`
    margin: 10px;
    width: 600px;
`
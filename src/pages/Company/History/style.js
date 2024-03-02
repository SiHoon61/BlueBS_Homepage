import styled from "styled-components";

//img
import company from '../../../assets/Company/company.png'
import onlyLogo from '../../../assets/Company/onlyLogo.png'
import img2007 from '../../../assets/Company/img2007.png'
import img2010 from '../../../assets/Company/img2010.png'
import line from '../../../assets/Company/line1.svg'
import line2 from '../../../assets/Company/line2.svg'
import line3 from '../../../assets/Company/line3.svg'

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
    src: line3,
    alt: 'line'
})`
    margin-top: 20px;
    margin-left: 30px;
    height: 20px;
`
export const ImgContainer = styled.div`
    width: 600px;
    margin-right: 50px;
    position: ${props => props.$isFixed ? 'fixed' : 'absolute'};
    top: ${props => props.$isFixed ? '255' : 'auto'}px;
    right: 53%;
    font-size: 32px;
    font-family: var(--font-sansBold);
`

export const ImgDescription = styled.div`

`

export const Img2007 = styled.img.attrs({
    src: img2007,
    alt: 'img2007'
})`
    width: 600px;
    margin-right: 50px;
`

export const Img2011 = styled.img.attrs({
    src: img2010,
    alt: 'img2010'
})`
    width: 600px;
    margin-right: 50px;
    opacity:  ${props => props.$isFixed ? '1' : '0'};
    position: fixed;
    top: 255px;
    right: 53%;
    transition: opacity 0.5s ease;
`
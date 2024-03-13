import styled from "styled-components";
import nanobubble from '../../../assets/Technology/nanobubble.png'
//img
import nanoFeature from '../../../assets/Technology/nanoFeature.png'
import nanoBird from '../../../assets/Technology/nanoBird2.png'
import nanoMonitoring from '../../../assets/Technology/nanoMonitoring.png'
import nanoDevelop from '../../../assets/Technology/nanoDevelop.svg'


export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${nanobubble});
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
export const TitleSubText = styled.div`
    font-size: 48px;
    font-family: var(--font-sansBold);
    color: #FEE824;
    margin-bottom: -15px;
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

export const ExampleSubTitle = styled.div`
    margin-top: 10px;
    margin-left: 110px;
    width: 1390px;
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
    margin-bottom: 35px;
`

export const NanoImgBox = styled.div`
    width: 1500px;
    display: flex;
    justify-content: space-between;
`
export const NanoImg1 = styled.img`
    width: 370px;
    margin-bottom: 5px;
`

export const NanoVideo2 = styled.video`
    width: 435px;
    margin-bottom: 5px;
`

export const NanoVideo3 = styled.video`
    width: 500px;
    margin-bottom: 5px;
`

export const ImgDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 18px;
    align-items: center;
`

export const NanoFeatureImg = styled.img.attrs({
    src: nanoFeature,
    alt: 'nanoFeature'
})`
    width: 1500px;
`

export const ImgSubTitle = styled.div`
    margin-top: 10px;
    width: 1000px;
    font-size: 40px;
    font-family: var(--font-sansBold);
`

export const ImgSubContent = styled.div`
    display: flex;
    width: 1000px;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px; 
    margin-top: 30px;
`

export const NanoBirdImg = styled.img.attrs({
    src: nanoBird,
    alt: 'nanoBird'
})`
    width: 470px;
    margin-left: 30px;
`

export const NanoExampleBox = styled.div`
    margin-top: 35px;
    width: 1500px;
    display: flex;
    justify-content: space-evenly;
`

export const NanoExampleImg = styled.img`
    margin-bottom: 5px;
`

export const MonitoringImgSubTitle = styled.div`
    margin-top: 10px;
    width: 900px;
    font-size: 40px;
    font-family: var(--font-sansBold);
`

export const MonitoringImgSubContent = styled.div`
    display: flex;
    width: 900px;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px; 
    margin-top: 30px;
`


export const NanoMonitoring = styled.img.attrs({
    src: nanoMonitoring,
    alt: 'nanoMonitoring'
})`
    width: 570px;
    margin-left: 30px;
`

export const NanoDevelopImg = styled.img.attrs({
    src: nanoDevelop,
    alt: 'nanoDevelop'
})`
    width: 1500px;
`

export const NanoSoftWareBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 1500px;
    justify-content: space-between;
`

export const NanoSoftWareImg = styled.img`
    width: 350px;
`
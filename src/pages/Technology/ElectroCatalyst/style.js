import styled from "styled-components";

//img
import electroCatalyst from '../../../assets/Technology/electroCatalyst.png'
import elecImg1 from '../../../assets/Technology/elecImg1.png'


export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${electroCatalyst});
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

export const SubRowContainer = styled.div`
    align-items: flex-start;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`

export const SubColumnContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ImgSubTitle = styled.div`
    margin-top: 10px;
    width: 1000px;
    font-size: 48px;
    font-family: var(--font-sansBold);
`

export const SubTitle = styled.div`
    margin-top: 10px;
    width: 1500px;
    font-size: 48px;
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

export const ElecImg1 = styled.img.attrs({
    src: elecImg1,
    alt: 'elecImg1'
})`
    width: 450px;
    margin-left: 50px;
`
export const EFImgBox = styled.div`
    width: 1500px;
    display: flex;
    justify-content: space-between;
`

export const EfImg = styled.img`
    width: 300px;
`
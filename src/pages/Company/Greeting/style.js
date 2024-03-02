import styled from "styled-components";

//img
import company from '../../../assets/Company/company.png'
import hongmin from '../../../assets/Company/hongmin.jpg'
import sign from '../../../assets/Company/sign.png'

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
    font-size: 12px;
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
    color: #313131;
    width: 100%;
`

export const BodyTitle = styled.div`
    max-width: 1400px;
    font-size: 48px;
    margin: 0 auto;
    font-family: var(--font-sansBold);
`

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1400px;
    width: 985px;
    margin: 50px auto;
    font-size: 18px;
    line-height: 30px;
`

export const PictureBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const Picture = styled.img.attrs({
    src: hongmin,
    alt: 'HongMin'
})`
    width: 300px;
    margin-left: 50px;
`

export const NameBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 50px;  
    font-size: 22px;
    font-family: var(--font-sansBold);
`

export const SignBox = styled.div`
    margin-top: 10px;
    display: flex;
    font-size: 28px;
    font-family: var(--font-sansBold);
    align-items: center
`

export const SingImg = styled.img.attrs({
    src: sign,
    alt: 'sign'
})`
    margin-left: 20px;
    margin-top: 3px;
    width: 170px;
`
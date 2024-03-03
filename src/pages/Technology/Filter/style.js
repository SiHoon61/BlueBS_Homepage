import styled from "styled-components";
import electroCatalyst from '../../../assets/Technology/electroCatalyst.png'

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
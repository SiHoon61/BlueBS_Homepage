import styled from "styled-components";

//img
import communication from '../../../assets/Communication/Communication.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${communication});
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

export const MapContainer = styled.div`
    display: flex;
    width: 1250px;
    height: 400px;
    margin: 20px auto;
`

export const MapDescriptionBox = styled.div`
    width: 400px;
    height: 400px;
    margin-left: 50px;
`

export const TextBox = styled.div`
    font-family: var(--font-sansBold);
    font-size: 18px;
    margin-bottom: 30px;
`

export const RegularText = styled.div`
    margin-top: 5px;
    font-size: 16px;
    font-family: var(--font-sansRegular);
`

export const Hr = styled.hr`
    border: 0;
    width: 1250px;
    height: 2px;
    background: grey;
`
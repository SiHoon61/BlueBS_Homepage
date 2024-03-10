import styled, { css } from 'styled-components';
import rightArrow from '../../../assets/Home/rightArrow.svg'

export const SliderContainer = styled.div`

`

export const NextTo = styled.div`
    background-image: url(${rightArrow});
    background-size: contain;
    opacity: 70%;
    height: 50px;
    width: 50px;
`

export const Prev = styled.div`
    transform: rotate(180deg);
    opacity: 70%;
    background-image: url(${rightArrow});
    background-size: contain;
    height: 50px;
    width: 50px;
`

export const ImageBox = styled.div`
`
export const BusinessImage = styled.div`
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${props => props.$src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 800px;
    height: 534px;
    margin: auto;
    display: flex;
    position: relative;
    cursor: pointer;
`
export const BusinessTextBox = styled.div`
    display:flex;
    position: absolute;
    bottom: 15%;
    left: 5%;
    flex-direction: column;
    font-size: 20px;
    color: white;
`

export const BusinessTitleText = styled.div`
    margin-bottom: 6px;
    font-size: 48px;
    font-family: var(--font-sansBold);
`


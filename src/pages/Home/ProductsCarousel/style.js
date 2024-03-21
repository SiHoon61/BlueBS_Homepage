import styled from 'styled-components';
import emptyArrow from '../../../assets/Home/emptyArrow.svg'
import emptyArrow2 from '../../../assets/Home/emptyArrow2.svg'

export const SliderContainer = styled.div`
    margin-left: 10%;
    margin-top: 100px;
    @media (max-width: 600px){
        margin-top: 0px;
    }
`

export const ProductsBox = styled.div`

`

export const ProductsImg = styled.img`
    width: 500px;
    cursor: pointer;
    @media (max-width: 600px) {
        width: 330px;
    }
`

export const ProductsEmptyBox = styled.div`
    width: 500px;
    height: 330px;
`


export const ProductsTitleText = styled.div`
    font-size: 32px;
    font-family: var(--font-sansBold);
    margin-bottom: 5px;
    @media (max-width: 600px) {
        font-size: 26px;
    }
`

export const ProductsOddText = styled.div`
    color: white;
    width: 500px;
    margin-top: 50px;
    margin-bottom: 20px;
    cursor: pointer;
    @media (max-width: 600px) {
        margin-top: 20px;
        width: 340px;
    }
`

export const ProductsEvenText = styled.div`
    color: white;
    width: 500px;
    margin-top: 20px;
    margin-bottom: 50px;
    cursor: pointer;
    @media (max-width: 600px) {
        margin-top: 20px;
        width: 330px;
    }
`

export const NextTo = styled.div`
    background-image: url(${emptyArrow});
    background-size: cover;
    height: 60px;
    width: 60px;
    
    @media (max-width: 1350px) {
        display: none;
    }
    @media (max-width: 600px) {
        background-image: url(${emptyArrow2});
        display: flex;
        height: 45px;
        width: 45px;
    }
`

export const Prev = styled.div`
    transform: rotate(180deg);
    background-image: url(${emptyArrow});
    background-size: cover;
    height: 60px;
    width: 60px;
    @media (max-width: 1350px) {
        display: none;
    }
    @media (max-width: 600px) {
        background-image: url(${emptyArrow2});
        display: flex;
        height: 45px;
        width: 45px;
    }
`

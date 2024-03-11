import styled from 'styled-components';
import emptyArrow from '../../../assets/Home/emptyArrow.svg'

export const SliderContainer = styled.div`
    margin-left: 10%;
    margin-top: 100px;
`

export const ProductsBox = styled.div`

`

export const ProductsImg = styled.img`
    width: 500px;
    cursor: pointer;
`

export const ProductsEmptyBox = styled.div`
    width: 500px;
    height: 330px;
`

export const ProductsTitleText = styled.div`
    font-size: 32px;
    font-family: var(--font-sansBold);
    margin-bottom: 5px;
`

export const ProductsOddText = styled.div`
    color: white;
    width: 500px;
    margin-top: 50px;
    margin-bottom: 20px;
    cursor: pointer;
`

export const ProductsEvenText = styled.div`
    color: white;
    width: 500px;
    margin-top: 20px;
    margin-bottom: 50px;
    cursor: pointer;
`

export const NextTo = styled.div`
    background-image: url(${emptyArrow});
    background-size: contain;
    //opacity: 70%;
    height: 60px;
    width: 60px;
`

export const Prev = styled.div`
    transform: rotate(180deg);
    //opacity: 70%;
    background-image: url(${emptyArrow});
    background-size: contain;
    height: 60px;
    width: 60px;
`

import styled from "styled-components";

//img
import downArrow from '../../assets/Home/downArrow.svg'
import tech1 from '../../assets/Home/tech1.png'
import tech2 from '../../assets/Home/tech2.png'
import tech3 from '../../assets/Home/tech3.png'
import tech4 from '../../assets/Home/tech4.png'
import boxArrow from '../../assets/Home/boxArrow.svg'
import productsBackground from '../../assets/Home/productsBackground.png'


export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.$height}px;
    z-index: 0;
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ScrollDown = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -61px;
    color: white;
    font-size: 22px;
    font-family: var(--font-sansRegular);
`

export const DownImg = styled.img.attrs({
    src: downArrow,
    alt: "아래 화살표"
})`
    margin-top: 5px;
    height: 40px;
`

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`
export const TechText = styled.div`
    margin: 100px 0px 35px 10%;
    font-size: 96px;
    font-family: var(--font-sansBold);
`
export const TechSubIndexContainer = styled.div`
    height: 700px;
    max-width: ${props => props.$width}px;
    display:flex;
`
export const Tech1 = styled.div`
    position: relative;
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${tech1});
    width: ${props => props.$width}px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    &:hover{
        width: calc(${props => props.$width}px * 1.5);
        transition: 0.3s;
        img {
            opacity: 1;
            transition: 0.3s;
        }
    }
    transition: opacity 0.3s, width 0.3s;
    cursor: pointer;
`

export const Tech2 = styled.div`
    position: relative;
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${tech2});
    width: ${props => props.$width}px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    &:hover{
        width: calc(${props => props.$width}px * 1.5);
        transition: 0.3s;
        img {
            opacity: 1;
            transition: 0.3s;
        }
    }
    transition: opacity 0.3s, width 0.3s;
    cursor: pointer;
`

export const Tech3 = styled.div`
    position: relative;
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${tech3});
    width: ${props => props.$width}px;
    background-size: cover;
    background-repeat: no-repeat;
     background-position: center center;
    &:hover{
        width: calc(${props => props.$width}px * 1.5);
        transition: 0.3s;
        img {
            opacity: 1;
            transition: 0.3s;
        }
    }
    transition: opacity 0.3s, width 0.3s;
    cursor: pointer;
`

export const Tech4 = styled.div`
    position: relative; 
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${tech4});
    width: ${props => props.$width}px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    &:hover{
        width: calc(${props => props.$width}px * 1.5);
        transition: 0.3s;
        img {
            opacity: 1;
            transition: 0.3s;
        }
    }
    transition: opacity 0.3s, width 0.3s;
    cursor: pointer;
`

export const TechTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFEA32;
    font-size: 30px;
    font-family: var(--font-sansBold);
    position: absolute;
    bottom: 15%;
    left: 8%;
`

export const TechTextBox = styled.div`
    font-size: 44px;
    font-family: var(--font-sansBold);
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
`

export const TectTextArrow = styled.img.attrs({
    src: boxArrow,
    alt: 'boxArrow'
})`
    opacity: 0;
    margin-top: 3px;
    margin-left: 15px;
    height: 35px;
`

export const BusinessContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    
`
export const BusinessTextBox = styled.div`
    display:flex;
    justify-content: flex-end;
    width: 100%;
`
export const BusinessText = styled.div` 
    margin: 100px 10% 35px 0px;
    font-size: 96px;
    font-family: var(--font-sansBold);
`

export const ProductsContainer = styled.div`
    margin-top: 100px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
     background-image: url(${productsBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; 
`

export const ProductsText = styled.div` 
    margin: 100px 0px 35px 10%;
    color: white;
    font-size: 96px;
    font-family: var(--font-sansBold);
`

export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const NewsText = styled.div`
    margin: 100px 0px 35px 0px;
    font-size: 96px;
    font-family: var(--font-sansBold);
`
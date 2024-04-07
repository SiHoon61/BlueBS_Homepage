import  { styled } from 'styled-components';

//img
import communication from '../../../assets/Communication/Communication.png'
import triangle from '../../../assets/Communication/triangle.png';

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
    @media (max-width: 1000px) {
        height: 450px;
    }
    @media (max-width: 600px) {
        height: 350px;
    }
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
    @media (max-width: 600px) {
        padding-top: 200px;
    }
`

export const TitleMainText = styled.div`
    font-size: 96px;
    font-family: var(--font-sansBold);
    @media (max-width: 1000px) {
        font-size: 72px;
    }
    @media (max-width: 600px) {
        font-size: 48px;
    }
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
    @media (max-width: 600px) {
        margin-top: 50px;
    }
`
export const SubColumnContainer = styled.div`
    margin: 0 auto 30px auto;
    display: flex;
    width: 1500px;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1600px) {
        max-width: 80%;
        margin: 0 auto 100px auto;
    }
    @media (max-width: 600px) {
        margin: 0 auto 50px auto;
        max-width: 90%;
    }
`

export const BodyText = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 26px;
    line-height: 45px;
    font-family: var(--font-sansBold);
`
export const SmallText = styled.div`
    font-size: 16px;
    font-family: var(--font-sansMedium);
`

export const RedText = styled.span`
    color: #FA6E60;
`

export const InquiryContainer = styled.div`
    margin: 0 auto 30px auto;
    display: flex;
    width: 1500px;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1600px) {
        max-width: 80%;
        margin: 0 auto 100px auto;
    }
    @media (max-width: 600px) {
        margin: 0 auto 50px auto;
        max-width: 90%;
    }
`

export const InquiryForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 50px;
    
`

export const KeyText = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansBold);  
    width: 100px;  
    margin-right: 120px;
`

export const Classify = styled.div`
    display: flex;
    align-items: center;
    padding-left: 15px;
    border: 1.5px solid grey;
    border-radius: 15px;
    width: 240px;
    height: 50px;
    cursor: pointer;
    position: relative;
`

export const ClassifyBox = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    box-shadow: 0px 2px 5px rgba(49,49,63,0.4);
    border-radius: 15px;
    width: 255px;
    position: absolute;
    top: ${props => props.$isClick ? 120 : 105}%;
    opacity: ${props => props.$isClick ? 1 : 0};
    pointer-events: ${props => props.$isClick ? 'auto' : 'none'};
    transition: all 0.3s ease;
    left: 0;
    margin-top: 2px;
    cursor: pointer;
`

export const ClassifyOption = styled.div`
    margin: 5px 0;
`

export const Triangle = styled.img.attrs({
    src: triangle,
    alt: 'triangle'
})`
    position: absolute;
    right: 15px;
    width: 13px;
    transform: ${props => props.$isClick ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: all 0.3s ease;
`

export const InputBox = styled.input`
    display: flex;
    align-items: center;
    padding-left: 15px;
    margin-right: 10px;
    border: 1.5px solid grey;
    border-radius: 15px;
    width: 240px;
    height: 50px;
    font-size: 18px;
`

export const InputDomain = styled.input`
    display: flex;
    align-items: center;
    padding-left: 15px;
    margin-left: 10px;
    border: 1.5px solid grey;
    border-radius: 15px;
    width: 180px;
    height: 50px;
    font-size: 18px;
`
export const SelectDomain = styled.div`
    display: flex;
    align-items: center;
    padding-left: 15px;
    margin-left: 5px;
    border: 1.5px solid grey;
    border-radius: 15px;
    width: 180px;
    height: 50px;
    cursor: pointer;
    position: relative;
`
export const DomainBox = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    box-shadow: 0px 2px 5px rgba(49,49,63,0.4);
    border-radius: 15px;
    width: 195px;
    position: absolute;
    top: ${props => props.$isClick ? 120 : 105}%;
    opacity: ${props => props.$isClick ? 1 : 0};
    pointer-events: ${props => props.$isClick ? 'auto' : 'none'};
    transition: all 0.3s ease;
    left: 0;
    margin-top: 2px;
    cursor: pointer;
`

export const DomainOption = styled.div`
    margin: 5px 0;
`
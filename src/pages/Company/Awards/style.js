import styled from "styled-components";

//img
import company from '../../../assets/Company/company.png'

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
    font-size: 14px;
    font-family: var(--font-sansRegular);
`

export const TitleMainText = styled.div`
    font-size: 96px;
    font-family: var(--font-sansBold);
`

export const MainContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
`

export const ButtonBox = styled.div`
    display: flex;
    margin: 0 auto;
`

export const CertificationButtonText = styled.div`
    display: flex;
    justify-content: center;
    width: 70px; 
    padding: 0 5px;
    font-size: 20px;
    font-family: ${props => props.$isSelect === '0' ? 'var(--font-sansBold)' : 'var(--font-sansMedium)'};
    color: ${props => props.$isSelect === '0' ? '#004A9F' : 'grey'};
    transition: all 0.3s ease;
    cursor: pointer;
`

export const AwardsButtonText = styled.div`
    display: flex;
    justify-content: center;
    width: 70px; 
    padding: 0 5px;
    font-size: 20px;
    font-family: ${props => props.$isSelect === '1' ? 'var(--font-sansBold)' : 'var(--font-sansMedium)'};
    color: ${props => props.$isSelect === '1' ? '#004A9F' : 'grey'};
    transition: all 0.3s ease;
    cursor: pointer;
`
export const PatentButtonText = styled.div`
    display: flex;
    justify-content: center;
    width: 70px; 
    padding: 0 5px;
    font-size: 20px;
    font-family: ${props => props.$isSelect === '2' ? 'var(--font-sansBold)' : 'var(--font-sansMedium)'};
    color: ${props => props.$isSelect === '2' ? '#004A9F' : 'grey'};
    transition: all 0.3s ease;
    cursor: pointer;
`

export const EmptyColumn = styled.div`
    height: ${props => {
        if (props.$isSelect === '0') {
            return '1630'
        }
        else if (props.$isSelect === '1') {
            return '1052'
        }
        else {
            return '2980'
        }
    }}px;
`

export const CertificationPart = styled.div`
    position: absolute;
    width: 1444px;
    top: 80px;
    align-items: center;
    flex-wrap: wrap;
    display: ${props => props.$isSelect === '0' ? 'flex' : 'none'};
`

export const AwardsPart = styled.div`
    position: absolute;
    width: 1444px;
    top: 80px;
    align-items: center;
    flex-wrap: wrap;
    display: ${props => props.$isSelect === '1' ? 'flex' : 'none'};
`

export const PatentPart = styled.div`
    position: absolute;
    width: 1449px;
    top: 80px;
    flex-wrap: wrap;
    display: ${props => props.$isSelect === '2' ? 'flex' : 'none'};
`

export const RowContainer = styled.div`
    display: flex; 
    margin-bottom: 50px;
`

export const AwardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 30px 70px 30px;
`
export const EmptyBox = styled.div`
    margin: 0 30px;
    width: 300px;
    height: 425px;
`

export const AwardImg = styled.img`
    width: 300px;
    height: 425px;
    border: 1px solid grey;
`

export const NoBorderAwardImg = styled.img`
    width: 300px;
    height: 425px;
`

export const AwardDescription = styled.div`
    display: flex;
    width: 250px;
    flex-direction: column;
    align-items: center;
    color: #0B75EF;
    margin-top: 5px;
`

export const AwardName = styled.div`
    margin-top: 5px;
    color: black;
    font-size: 18px;
    font-family: var(--font-sansMedium);
`


export const PatentName = styled.div`
    color: black;
    font-size: 16px;
    font-family: var(--font-sansMedium);
`
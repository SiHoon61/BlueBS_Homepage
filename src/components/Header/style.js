import styled from 'styled-components';

//assets
import whiteLogo from '../../assets/whiteLogo.svg'
import blueLogo from '../../assets/blueLogo.svg'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color: ${props => props.$state === 'top' ? 'transparent' : 'white'};
    color: ${props => props.$state === 'top' ? 'white' : 'black'};
    height: ${props => props.$state === 'top' ? 90 : 70}px;
    transition: top 0.3s, background-color 0.3s, height 0.3s;
    object-fit: cover;

`;

export const WhiteLogo = styled.img.attrs({
    src: whiteLogo,
    alt: "흑백로고",
})`
    height: 60px;
    margin-left: 80px;
`;

export const BlueLogo = styled.img.attrs({
    src: blueLogo,
    alt: "컬러로고",
})`
    height: 60px;
    margin-left: 80px;
`;

export const EmptyBox = styled.div`
    width: 100px;
    height: 60px;
    margin-right: 80px;
`

export const IndexContainer = styled.div`
    display: flex;
`;

export const IndexUL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`

export const IndexLI = styled.li`
    padding: 0 30px;
    font-size: 16px;
    font-family: var(--font-sansMedium);
`


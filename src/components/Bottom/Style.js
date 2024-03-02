import styled from 'styled-components';
//img
import whiteLogo from '../../assets/whiteLogo.svg'

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    width: 100%;
    height: 200px;
    background-color: #0D1E29;
    justify-content: center;
`

export const WhiteLogo = styled.img.attrs({
    src: whiteLogo,
    alt: "흑백로고",
})`
    margin: auto 80px;
    height: 100px;
`

export const TextBox = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
 `

export const CompanyName = styled.div`
    font-size: 22px;
    margin-bottom: 15px;
    padding: 0 20px;
 `

export const CompanyInformation = styled.ul`
    display: flex;
    width: 1200px;
    list-style-type: none;
    font-size: 18px;
    padding: 0px;
 `

export const Content = styled.li`
    padding: 0 20px;
`

export const EmptyBox = styled.div`
    margin: auto 80px;
    height: 120px;
    width: 50px;
`
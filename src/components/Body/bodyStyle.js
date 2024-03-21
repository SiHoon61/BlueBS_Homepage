import styled from "styled-components";

export const SubColumnContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 600px) {
        margin: 0 auto 50px auto;
    }
`

export const SubLargeTitle = styled.div`
    margin-bottom: 15px;
    max-width: 80%;
    font-size: 48px;
    font-family: var(--font-sansBold);
    @media (max-width: 600px) {
        max-width: 90%;
        font-size: 36px;
    }
`
export const SubCenterTitle = styled.div`
    margin-top: 10px;
    max-width: 80%;
    margin: 0 auto;
    font-size: 40px;
    font-family: var(--font-sansBold);
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
        max-width: 90%;
        font-size: 32px;
    }
`

export const FullSubContent = styled.div`
    margin: 0 auto 150px auto;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px;
    @media (max-width: 600px) {
        max-width: 90%;
        font-size: 16px;
        margin: 0 auto 50px auto;
    }
`


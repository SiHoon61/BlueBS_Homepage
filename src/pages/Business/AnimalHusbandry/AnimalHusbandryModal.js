import React, { useRef } from 'react';
import styled, { css } from "styled-components";

//
import close from '../../../assets/Business/close.svg'

const Modal = styled.div`
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    position: relative;
    background: white;
    padding: 60px 70px 70px 70px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CloseButton = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

const Title = styled.div`
    font-size: 30px;
    font-family: var(--font-sansBold);
`
const AnimalHusbandryModal = ({ onClose }) => {
    const contentRef = useRef(null);

    const handleClickOutside = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            onClose(); // 클릭된 영역이 Content 밖이라면 모달 닫기 함수 호출
        }
    };
    return (
        <>
            <Modal onClick={handleClickOutside}>
                <Content ref={contentRef}>
                    <CloseButton
                        src={close}
                        alt="close"
                        onClick={onClose}
                    />
                    <Title>
                        주요실적
                    </Title>
                    <Table />
                </Content>
            </Modal>
        </>
    );
};

const StyledTable = styled.table`
    margin-top: 25px;
    font-size: 18px;
    border-collapse: collapse;
    font-family: var(--font-sansMedium);
`;

const TR = styled.tr``;

const baseCellStyle = css`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: left;
    padding: 18px 30px;
    font-family: var(--font-sansMedium);
    height: 40px;
`;

const TD = styled.td`
    ${baseCellStyle}
    font-size: ${props => props.$size};
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
`;

const RSTD = styled.td`
    ${baseCellStyle}
    font-size: ${props => props.$size};
    border-top: 2px solid black;
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
`;

const RFTD = styled.td`
    ${baseCellStyle}
    font-size: ${props => props.$size};
    border-bottom: 2px solid black;
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
`;

export const DescriptionStyle = styled.span`
    margin-right: 10px;
    font-size: 18px;
    font-family: var(--font-sansBold);
`


const Table = () => {
    return (
        <>
            <StyledTable>
                <tbody>
                    <TR>
                        <RSTD $size={"20px"}>제주 해거름마을 영농조합 ㈜포엠
                            제주 두부폐수처리시설</RSTD>
                        <RSTD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            30m3/d
                        </RSTD>
                        <RSTD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매
                        </RSTD>
                    </TR>
                    <TR>
                        <RFTD $size={"20px"}>음성군
                            총인 산업폐수처리시설</RFTD>
                        <RFTD >
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            1,000m3/d
                        </RFTD>
                        <RFTD >
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매
                        </RFTD>
                    </TR>
                </tbody>
            </StyledTable>
        </>
    );
};

export default AnimalHusbandryModal;
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
const AgricultureModal = ({ onClose }) => {
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
    font-size: ${props => props.$size};
    ${baseCellStyle}
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
`;

const RSTD = styled.td`
    font-size: ${props => props.$size};
    ${baseCellStyle}
    border-top: 2px solid black;
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
`;

const RFTD = styled.td`
    font-size: ${props => props.$size};
    ${baseCellStyle}
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
                        <RSTD $size={"20px"}>한국농어촌공사
                            대구 하우스 시설 단지</RSTD>
                        <RSTD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            500m3/d
                        </RSTD>
                        <RSTD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </RSTD>
                    </TR>
                    <TR>
                        <TD $size={"20px"}>경북대학교
                            대구 하우스 시설 단지 </TD>
                        <TD >
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            300m3/d
                        </TD>
                        <TD >
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </TD>
                    </TR>
                    <TR>
                        <TD $size={"20px"}>김해시
                            김해시 화목가압장 농업용수 공급 여과기</TD>
                        <TD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            5,000m3/d
                        </TD>
                        <TD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </TD>
                    </TR>
                    <TR>
                        <TD $size={"20px"}>새만금 사업단
                            김제시 새만금농생명용지 5공구 공급 여과기
                        </TD>
                        <TD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            3,000m3/d
                        </TD>
                        <TD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </TD>
                    </TR>
                    <TR>
                        <RFTD $size={"20px"}>김해시
                            하천수 농업용수 공급 안양 양수장
                        </RFTD>
                        <RFTD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            5,000m3/d
                        </RFTD>
                        <RFTD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매 + MSF
                        </RFTD>
                    </TR>
                </tbody>
            </StyledTable>
        </>
    );
};

export default AgricultureModal;
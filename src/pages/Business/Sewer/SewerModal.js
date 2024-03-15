import React, { useRef } from 'react';
import styled, { css, keyframes } from "styled-components";

//
import close from '../../../assets/Business/close.svg'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

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
    animation: ${props => props.show ? fadeIn : fadeOut} 0.3s forwards;
`
const Content = styled.div`
    position: relative;
    background: white;
    padding: 60px 70px 70px 70px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${props => props.show ? fadeIn : fadeOut} 0.2s forwards;
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
const SewerModal = ({ show, onClose }) => {
    const contentRef = useRef(null);
    const handleClickOutside = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            onClose(); // 클릭된 영역이 Content 밖이라면 모달 닫기 함수 호출
        }
    };
    return (
        <>
            <Modal onClick={handleClickOutside} show={show}>
                <Content ref={contentRef} show={show}>
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
                        <RSTD $size={"20px"}>제주 상하수도본부
                            월정하수처리 재이용 시스템</RSTD>
                        <RSTD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            5,000m3/d
                        </RSTD>
                        <RSTD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매 + 분리막
                        </RSTD>
                    </TR>
                    <TR>
                        <TD $size={"20px"}>김해시
                            화목지구 하수 염제거 재이용시스템</TD>
                        <TD >
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            500m3/d
                        </TD>
                        <TD >
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매 + 분리막
                        </TD>
                    </TR>
                    <TR>
                        <TD $size={"20px"}>울산 폐수처리 재이용 시스템</TD>
                        <TD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            10m3/d
                        </TD>
                        <TD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매
                        </TD>
                    </TR>
                    <TR>
                        <TD $size={"20px"}>대구 폐수처리 재이용 시스템</TD>
                        <TD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            5m3/d
                        </TD>
                        <TD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매
                        </TD>
                    </TR>
                    <TR>
                        <TD $size={"20px"}>제주 폐수처리 재이용시스템</TD>
                        <TD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            10m3/d
                        </TD>
                        <TD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매
                        </TD>
                    </TR>
                    <TR>
                        <RFTD $size={"20px"}>SK에코플랜트
                            인천가좌 폐수재이용시스템</RFTD>
                        <RFTD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            50m3/d
                        </RFTD>
                        <RFTD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매 + 분리막
                        </RFTD>
                    </TR>
                </tbody>
            </StyledTable>
        </>
    );
};

export default SewerModal;
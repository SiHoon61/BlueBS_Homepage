import React, { useState } from 'react';

//img
import performanceImg1 from '../../../assets/Business/Sewer/performanceImg1.png'
import performanceImg2 from '../../../assets/Business/Sewer/performanceImg2.png'
import techImg1 from '../../../assets/Business/Sewer/techImg1.png'
import techImg2 from '../../../assets/Business/Sewer/techImg2.png'
import techImg3 from '../../../assets/Business/Sewer/techImg3.png'
//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    SubImgContainer,
    SubLargeTitle,
    SubLargeContainer,
    SubTitle,
    FullSubContent,
    BodyImg,
    ProcessImg,
    PerformanceContent,
    PerformanceImgBox,
    PerformanceImgContainer,
    PerformanceImg,
    DescriptionBox,
    Description,
    DescriptionStyle,
    More,
    Arrow,
    TechImg,
    EmptyBox,
    ImgDescription,
} from './style'

//Modal
import ModalPortal from '../../../modal/ModalPortal';
import SewerModal from './SewerModal';

const Sewer = () => {
    const [modalState, setModalState] = useState(false);

    const handleOpenModal = () => {
        setModalState(true);
    };
    const handleCloseModal = () => {
        setModalState(false);
    };
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Business · 하/폐수분야
                    <TitleMainText>
                        하/폐수분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubLargeContainer>
                    <SubLargeTitle>
                        하·폐수 분야
                    </SubLargeTitle>
                    <FullSubContent>
                        하수 및 폐수를 초고도로 재이용하여 친환경 수자원으로 다시 활용됩니다.<br />
                        최종 처리수는 친수용수, 농업용수, 공업용수, 조경용수, 세척용수, 그리고 하천 유지용수로 사용됩니다.
                    </FullSubContent>
                </SubLargeContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        수처리 프로세스
                    </SubTitle>
                    <ProcessImg />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        제주 상하수도본부
                        판포하수처리 재이용 시스템
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceImgContainer>
                            <PerformanceImg src={performanceImg1} alt="performanceImg" />
                            <PerformanceImg src={performanceImg2} alt="performanceImg" />
                        </PerformanceImgContainer>
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    제주도
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2009년
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                용량
                                <DescriptionStyle>
                                    5,000m3/d
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                맞춤형 공정
                                <DescriptionStyle>
                                    전기촉매 + 분리막
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                <More onClick={handleOpenModal}>
                                    실적 더보기
                                    <Arrow />
                                </More>
                            </Description>
                        </DescriptionBox>
                    </PerformanceImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        주요 기술
                    </SubTitle>
                    <SubImgContainer>
                        <ImgDescription>
                            <TechImg src={techImg1} alt="TechImg" />
                            전기촉매 기반의 분리막 재이용 고도처리
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg2} alt="TechImg" />
                            전기촉매 고액분리 기반의 RO 분리막
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg3} alt="TechImg" />
                            RO 분리막
                        </ImgDescription>
                        <EmptyBox />
                    </SubImgContainer>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <SewerModal onClose={handleCloseModal} show={modalState} />
                    </ModalPortal>
                )}
            </MainContainer>
        </>
    );
};

export default Sewer;
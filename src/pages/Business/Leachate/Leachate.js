import React, { useState } from 'react';

//img

import performanceImg from '../../../assets/Business/Leachate/performanceImg.png'
import techImg1 from '../../../assets/Business/Leachate/techImg1.png'
import techImg2 from '../../../assets/Business/Leachate/techImg2.png'
import techImg3 from '../../../assets/Business/Leachate/techImg3.png'

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
    PerformanceContent,
    PerformanceImgBox,
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
import LeachateModal from './LeachateModal';

const Leachate = () => {
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
                    Home · Business · 침출수분야
                    <TitleMainText>
                        침출수분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubLargeContainer>
                    <SubLargeTitle>
                        침출수 분야
                    </SubLargeTitle>
                    <FullSubContent>
                        전기 촉매(OH 라디칼)를 이용한 산화, 흡착, 응집으로 폐수를 처리합니다.<br />
                        산업폐수, 침출수, 음식물 폐수 등을 대상으로 질소, 인, 색도, 냄새(악취) 등을 효과적으로 제거하는 맞춤형 처리 방식의 전용 시스템입니다.
                    </FullSubContent>
                </SubLargeContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        제주시
                        제주 침출수 고도처리 시설
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceImg src={performanceImg} alt="performanceImg" />
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
                                    2022년
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                용량
                                <DescriptionStyle>
                                    100m3/d
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
                            전기촉매 전처리 고액분리 장치
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg2} alt="TechImg" />
                            RO 분리막 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg3} alt="TechImg" />
                            각종 유틸리티 및 처리 수조
                        </ImgDescription>
                        <EmptyBox />
                    </SubImgContainer>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <LeachateModal onClose={handleCloseModal} />
                    </ModalPortal>
                )}
            </MainContainer>
        </>
    );
};

export default Leachate;
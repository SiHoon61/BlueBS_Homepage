import React, { useState } from 'react';

//img

import performanceImg from '../../../assets/Business/GreenAlgae/performanceImg.png'
import techImg1 from '../../../assets/Business/GreenAlgae/techImg1.png'
import techImg2 from '../../../assets/Business/GreenAlgae/techImg2.png'
import techImg3 from '../../../assets/Business/GreenAlgae/techImg3.png'

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
import GreenAlgaeModal from './GreenAlgaeModal';

const GreenAlgae = () => {
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
                    Home · Business · 녹조분야
                    <TitleMainText>
                        녹조분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubLargeContainer>
                    <SubLargeTitle>
                        녹조 분야
                    </SubLargeTitle>
                    <FullSubContent>
                        BlueBS는 오염물질(녹조,부유물질,T-N, T-P, BOD, COD) 의 저감을 위한 최적화된 기술을 보유하고 있습니다.<br />
                        기존 시스템 공정에 비해 에너지 소비 효율을 크게 향상시킨 하이브리드 공정을 적용했습니며, 짧은 시간 내(약 10초)에 녹조를 제거하는 처리 능력을 극대화했습니다.
                    </FullSubContent>
                </SubLargeContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        낙동강 녹조 제거
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceImg src={performanceImg} alt="performanceImg" />
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    낙동강
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2016년 8월
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
                                    전기촉매 ZT
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
                            차량 이동형 녹조 제거 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg2} alt="TechImg" />
                            컨테이너 형 녹조 제거 시스템 
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg3} alt="TechImg" />
                            녹조선 시스템
                        </ImgDescription>
                        <EmptyBox />
                    </SubImgContainer>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <GreenAlgaeModal onClose={handleCloseModal} />
                    </ModalPortal>
                )}
            </MainContainer>
        </>
    );
};

export default GreenAlgae;
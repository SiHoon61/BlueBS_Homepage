import React, { useState } from 'react';

//img

import performanceImg from '../../../assets/Business/AnimalHusbandry/performanceImg.png'
import techImg1 from '../../../assets/Business/AnimalHusbandry/techImg1.png'
import techImg2 from '../../../assets/Business/AnimalHusbandry/techImg2.png'
import techImg3 from '../../../assets/Business/AnimalHusbandry/techImg3.png'

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
import AnimalHusbandryModal from './AnimalHusbandryModal';

const AnimalHusbandry = () => {
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
                    Home · Business · 축산분야
                    <TitleMainText>
                        축산분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubLargeContainer>
                    <SubLargeTitle>
                        농업환경 분야
                    </SubLargeTitle>
                    <FullSubContent>
                        BlueBS는 전기 촉매 전극 시스템을 활용하여 고농도 오염물을 효과적으로 처리합니다.<br />
                        저희만의 맞춤형 촉매 전극을 활용하여 안전한 유지관리 및 에너지 저감, 그리고 환경오염을 줄이는 친환경 기술입니다
                    </FullSubContent>
                </SubLargeContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        여주시 돼지농장
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceImg src={performanceImg} alt="performanceImg" />
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    여주시
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2023년 5월
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                용량
                                <DescriptionStyle>
                                    10m3/d
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                맞춤형 공정
                                <DescriptionStyle>
                                    전기촉매시스템
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
                            전기촉매 고도처리 연계 순환형 액비
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg2} alt="TechImg" />
                            폭기 반응조
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg3} alt="TechImg" />
                            축산 분뇨 처리 과정
                        </ImgDescription>
                        <EmptyBox />
                    </SubImgContainer>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <AnimalHusbandryModal onClose={handleCloseModal} />
                    </ModalPortal>
                )}
            </MainContainer>
        </>
    );
};

export default AnimalHusbandry;
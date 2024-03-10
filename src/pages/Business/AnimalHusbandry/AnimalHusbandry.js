import React, { useState } from 'react';

//img
// import agricultureImg1 from '../../../assets/Business/Agriculture/agricultureImg1.png'
// import agricultureImg2 from '../../../assets/Business/Agriculture/agricultureImg2.png'
// import performanceImg from '../../../assets/Business/Agriculture/performanceImg.png'
// import techImg1 from '../../../assets/Business/Agriculture/techImg1.png'
// import techImg2 from '../../../assets/Business/Agriculture/techImg2.png'
// import techImg3 from '../../../assets/Business/Agriculture/techImg3.png'

//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubRowContainer,
    SubColumnContainer,
    SubImgContainer,
    SubLargeTitle,
    SubLargeContainer,
    SubTitle,
    FullSubContent,
    BodyImg,
    AgricultureImg,
    ImgSubTitle,
    ImgSubContent,
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
                    Home · Business ·농업분야
                    <TitleMainText>
                        농업분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubLargeContainer>
                    <SubLargeTitle>
                        농업환경 분야
                    </SubLargeTitle>
                    <FullSubContent>
                        농업을 숨쉬게 하는 물, BlueBS가 함께합니다.<br />
                        생활하수를 재처리한 물에는 질소, 인 등의 영양분이 풍부하여 비옥한 토양이 만들어집니다.
                    </FullSubContent>
                </SubLargeContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        제주도 성읍 지구
                    </PerformanceContent>
                    <PerformanceImgBox>
                        {/* <PerformanceImg src={performanceImg} alt="performanceImg" /> */}
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    제주도 성읍 지구
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2017년 9월
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                용량
                                <DescriptionStyle>
                                    30,000m3/d
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                맞춤형 공정
                                <DescriptionStyle>
                                    FDA 여과기
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
                        {/* <ImgDescription>
                            <TechImg src={techImg1} alt="TechImg" />
                            새만금 MSF / FDA 여과 농업용수 공급
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg2} alt="TechImg" />
                            김해시 화목 MSF / FDA 여과 농업용수 공급
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg3} alt="TechImg" />
                            김해시 안양 정수장 마이크로시스티 제거
                        </ImgDescription>
                        <EmptyBox /> */}
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
import React, {useState} from 'react';

//img
import performanceVideo from '../../../assets/Business/Purify/performanceVideo.mp4'
import techImg1 from '../../../assets/Business/Purify/techImg1.png'
import techImg2 from '../../../assets/Business/Purify/techImg2.png'

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
    PerformanceVideo,
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
import PurifyModal from './PurifyModal';

const Purify = () => {
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
                    Home · Business · 정수분야
                    <TitleMainText>
                        정수분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubLargeContainer>
                    <SubLargeTitle>
                        정수분야
                    </SubLargeTitle>
                    <FullSubContent>
                        BlueBS의 혁신적인 정수 기술을 통해 우리가 마시는 물을 안전하게 공급합니다.<br />
                        정수장 유입원수 내 맛냄새 유발물질인 2-MIB를 제거하는 시스템을 활용하여 안전한 먹는 물을 공급합니다.
                    </FullSubContent>
                </SubLargeContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        생활용수 공급 시스템
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceVideo muted autoPlay loop>
                            <source src={performanceVideo} type="video/mp4" />
                        </PerformanceVideo>
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    충남 아산 구룡지구
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2023년
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
                                    전기촉매
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
                            차량용 이동식 담수화 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg2} alt="TechImg" />
                            정수장 전처리 ZT 정수 시스템
                        </ImgDescription>
                        <EmptyBox />
                        <EmptyBox />
                    </SubImgContainer>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <PurifyModal onClose={handleCloseModal} show={modalState}/>
                    </ModalPortal>
                )}
                
                
            </MainContainer>
        </>
    );
};

export default Purify;
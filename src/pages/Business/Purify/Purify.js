import React from 'react';

//img
import performanceVideo from '../../../assets/Business/Purify/performanceVideo.mp4'

//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    SubRowContainer,
    SubLargeTitle,
    SubLargeContainer,
    SubTitle,
    FullSubContent,
    BodyImg,
    PerformanceImgBox,
    PerformanceVideo,
    DescriptionBox,
    Description
} from './style'

const Purify = () => {
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
                        BlueBS의 혁신적인 정수 기술을 통해 우리가 마시는 물을 안전하게 공급합니다.<br/>
                        정수장 유입원수 내 맛냄새 유발물질인 2-MIB를 제거하는 시스템을 활용하여 안전한 먹는 물을 공급합니다.
                    </FullSubContent>
                </SubLargeContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <FullSubContent>
                        생활용수 공급 시스템 
                    </FullSubContent>
                    <PerformanceImgBox>
                        <PerformanceVideo muted autoPlay loop>
                            <source src={performanceVideo} type="video/mp4" />
                        </PerformanceVideo>
                        <DescriptionBox>
                            <Description>
                                위치
                            </Description>
                            <Description>
                                준공일
                            </Description>
                            <Description>
                                용량
                            </Description>
                            <Description>
                                맞춤형 공정 
                            </Description>
                        </DescriptionBox>
                    </PerformanceImgBox>
                </SubColumnContainer>

            </MainContainer>
        </>
    );
};

export default Purify;
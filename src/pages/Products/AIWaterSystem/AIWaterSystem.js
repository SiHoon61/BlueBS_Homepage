import React from 'react';


import iotImg from '../../../assets/Products/AIWaterSystem/IOTImg.svg'
import smartWater1 from '../../../assets/Products/AIWaterSystem/smartWater1.png'
import smartWater2 from '../../../assets/Products/AIWaterSystem/smartWater2.png'
import smartWater3 from '../../../assets/Products/AIWaterSystem/smartWater3.png'
import smartWater4 from '../../../assets/Products/AIWaterSystem/smartWater4.png'
import smartWater5 from '../../../assets/Products/AIWaterSystem/smartWater5.png'
import smartWater6 from '../../../assets/Products/AIWaterSystem/smartWater6.png'
import smartWater7 from '../../../assets/Products/AIWaterSystem/smartWater7.png'
import smartWater8 from '../../../assets/Products/AIWaterSystem/smartWater8.png'
import smartWater9 from '../../../assets/Products/AIWaterSystem/smartWater9.png'
import smartWater10 from '../../../assets/Products/AIWaterSystem/smartWater10.png'
//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    ContentLi,
    SubSmallContainer,
    SubImgContainer,
    SubLargeTitle,
    SubTitle,
    FullSubContent,
    FullCenterContent,
    BodyImg,
    FullImg,
    ImgBox,
    ImgDescription,
    Imgs,
    DifferentImgs,
} from './style'

const AIWaterSystem = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Products · 인공지능 스마트 물 관리 시스템
                    <TitleMainText>
                        인공지능 스마트 물 관리 시스템
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        인공지능 스마트 물 관리 시스템
                    </SubLargeTitle>
                    <FullSubContent>
                        스마트 물 관리 시스템은 IoT, AMI 및 데이터 기반 솔루션과 같은 첨단 기술을 통합하여 처리, 생산 및 공급 상황 전반에 걸쳐 실시간 모니터링 및 최적화를 제공합니다.
                    </FullSubContent>
                    <ImgBox>
                        <ImgDescription>
                            <Imgs src={smartWater1} alt="smartWater" />
                            에너지 절감형 물 수요 예측 · 공급 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={smartWater2} alt="smartWater" />
                            안전하고 깨끗한 물 공급을 위한 수질 모니터링 장치
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={smartWater3} alt="smartWater" />
                            정확한 물 사용량 측정 및 모니터링을 위한 스마트 수량계
                        </ImgDescription>

                    </ImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        인공지능스마트 물 관리 시스템 모델
                    </SubTitle>
                    <FullCenterContent>
                        인공지능 스마트 물 관리 시스템은 취수원/원수로부터 다양한 물리화학적 기술(예, 전기촉매 필터 및 여과기술)을 적용하여 수요자 요구조건에 부합되는 양질의 물을 생산하고 수요량과 공급량 예측을 통해 최적의 물을 공급합니다. 각 배관/장치에 부착된 센서/장비/시스템의 이상진단은 “딥러닝 기반 이상진단 머신러닝”을 통해 해결하고 유지관리비/동력비 등 최적제어를 위해 능동학습 AI 기반 의사결정시스템을 통해 해결합니다.
                    </FullCenterContent>
                    <FullImg src={iotImg} alt="iotImg" />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        유사실적
                    </SubTitle>
                    <ImgBox>
                        <ImgDescription>
                            <Imgs src={smartWater4} alt="smartWater" />
                            인공지능 기반 수중 슬러지층 계면측정 관리
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={smartWater7} alt="smartWater" />
                            센서 기반 DB 획득 프로그램
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={smartWater6} alt="smartWater" />
                            인공지능 에너지 효율평가 및 관리시스템
                        </ImgDescription>
                    </ImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        개발중인 시스템
                    </SubTitle>
                    <ImgBox>
                        <ImgDescription>
                            <DifferentImgs src={smartWater8} alt="smartWater" />
                            인공지능 수위 모니터링 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <DifferentImgs src={smartWater9} alt="smartWater" />
                            인공지능 최적 에너지 공급 예측시스템
                        </ImgDescription>
                        <ImgDescription>
                            <DifferentImgs src={smartWater10} alt="smartWater" />
                            인공지능 물 공급량 및 소비량 최적 제어 시스템
                        </ImgDescription>
                    </ImgBox>
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default AIWaterSystem;
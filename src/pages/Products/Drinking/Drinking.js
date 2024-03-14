import React from 'react';

//img
import drinkingImg1 from '../../../assets/Products/Drinking/drinkingImg1.svg'
import drinkingImg2 from '../../../assets/Products/Drinking/drinkingImg2.svg'
import applyImg1 from '../../../assets/Products/Drinking/apply1.png'
import applyImg2 from '../../../assets/Products/Drinking/apply2.png'
import applyImg3 from '../../../assets/Products/Drinking/apply3.png'
import applyImg4 from '../../../assets/Products/Drinking/apply4.png'


//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    SubLargeTitle,
    SubTitle,
    FullSubContent,
    FullImg,
} from './style'

//carousel
import Carousel from '../ApplyCarousel/ApplyCarousel';

const Drinking = () => {
    const imgJson = [
        {
            src: applyImg1,
            alt: 'applyImg'
        },
        {
            src: applyImg2,
            alt: 'applyImg'
        },
        {
            src: applyImg3,
            alt: 'applyImg'
        },
        {
            src: applyImg4,
            alt: 'applyImg'
        }
    ];
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Products · 음용수/생활용수/담수화
                    <TitleMainText>
                        음용수/생활용수/담수화
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        정수 프로세스
                    </SubLargeTitle>
                    <FullSubContent>
                        레고 방식의 정수 시스템은 용도에 맞게 소형 또는 중형 모듈을 조합해 최적의 효율을 낼 수 있도록 설계되었습니다.<br />
                        원수의 특성에 맞춰 주처리, 전처리, 후처리 단계로 시스템을 구성하며, 컨테이너나 탑차 형태의 구조로 제작하여 외부 환경의 영향을 최소화한 콤팩트한 솔루션입니다.
                    </FullSubContent>
                    <FullImg src={drinkingImg1} alt="dringkingImg" />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        음용수·생활용수·담수화
                    </SubTitle>
                    <FullSubContent>
                        최근 남조류의 급속한 증가로 인해 곰팡이 냄새의 원인 물질인 2-MIB가 검출되고 있습니다.<br/>
                        전기촉매 기술을 활용하면 이를 10분 이내에 99%까지, 10ppt 이하로 효과적으로 처리할 수 있습니다.
                    </FullSubContent>
                    <FullImg src={drinkingImg2} alt="dringkingImg" />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        실제 적용 사례: 정수 시스템
                    </SubTitle>
                    <Carousel imgJson={imgJson}/>
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Drinking;
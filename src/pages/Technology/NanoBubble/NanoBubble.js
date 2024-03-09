import React from 'react';


//style
import {
    TitleBar,
    TitleTextBox,
    TitleSubText,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    SubRowContainer,
    SubLargeTitle,
    SubTitle,
    FullSubContent,
    NanoFeatureImg,
    ImgSubTitle,
    ImgSubContent,
    NanoBirdImg,
} from './style'

const Nanobubble = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Technology · 울트라 나노버블(UNB)
                    <TitleSubText>
                        막힘 없는
                    </TitleSubText>
                    <TitleMainText>
                        울트라 나노버블(UNB)
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        울트라 나노버블 (Ultra Nano Bubble)
                    </SubLargeTitle>
                    <FullSubContent>
                        나노버블은 물과 잘 섞이지 않는 소수성을 가지며, 안정적인 구조로 오랜 시간 지속되고, 중성 부력으로 물속에서 떠오르거나 가라앉지 않습니다.<br />
                        이러한 특징을 활용해, 저희는 바이러스부터 녹조에 이르기까지 다양한 물 속 부유물질을 효과적으로 제거합니다.
                    </FullSubContent>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        나노버블의 정의 및 특징
                    </SubTitle>
                    <FullSubContent>
                        나노버블은 극미세한 기포로서 전기적으로 충전된 표면을 통해 다른 물질과의 상호작용을 가능하게 합니다.<br />
                        이러한 나노버블은 물리적, 화학적, 생물학적 과정을 향상시킬 수 있는 특별한 성질을 지니고 있습니다.
                    </FullSubContent>
                    <NanoFeatureImg />
                </SubColumnContainer>
                <SubRowContainer>
                    <SubColumnContainer>
                        <ImgSubTitle>
                            나노버블의 우수성
                        </ImgSubTitle>
                        <ImgSubContent>
                            기존의 나노버블 발생장치는 주로 청정한 물에서 사용되는 기술로, 이물질이 많거나 유체의 속도가 빠른 환경에서의 적용이 어려웠습니다.<br/>
                            그러나, 본 기술은 이물질 유입이나 난류의 방해를 받지 않으면서도 고품질의 나노버블을 안정적으로 생산할 수 있습니다.
                        </ImgSubContent>
                    </SubColumnContainer>
                    <NanoBirdImg />
                </SubRowContainer>
            </MainContainer>
        </>
    );
};

export default Nanobubble;
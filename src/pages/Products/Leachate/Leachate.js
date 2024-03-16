import React from 'react';

//img
import processImg1 from '../../../assets/Products/Leachate/process1.png'
import processImg2 from '../../../assets/Products/Leachate/process2.png'
import processImg3 from '../../../assets/Products/Leachate/process3.png'
import leachate1 from '../../../assets/Products/Leachate/leachate1.png'
import leachate2 from '../../../assets/Products/Leachate/leachate2.png'
import leachate3 from '../../../assets/Products/Leachate/leachate3.png'
import applyImg1 from '../../../assets/Products/Leachate/apply1.png'
import applyImg2 from '../../../assets/Products/Leachate/apply2.png'
import applyImg3 from '../../../assets/Products/Leachate/apply3.png'
import applyImg4 from '../../../assets/Products/Leachate/apply4.png'
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
    ImgBox,
    Imgs,
    ImgDescription,
    GreyDescription,
    EmptyDescription,
    ProcessArrow,
} from './style'

//carousel
import Carousel from '../ApplyCarousel/ApplyCarousel';

const Leachate = () => {
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
                    Home · Products · 고농도 침출수 처리
                    <TitleMainText>
                        고농도 침출수 처리
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        축산분뇨 처리 프로세스
                    </SubLargeTitle>
                    <FullSubContent>
                        BlueBS의 맞춤형 촉매 전극은 축산분뇨 처리에 있어 효과적이며, 유지보수 및 에너지 절감을 지원하는 동시에 환경오염 감소에 기여하는 친환경적인 솔루션을 제공합니다.
                    </FullSubContent>
                    <ImgBox $width={'1500px'}>
                        <ImgDescription>
                            <Imgs src={processImg1} alt="processImg" $width={"410px"} />
                            폐기물에서 배출 된 오염물질
                            <EmptyDescription />
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <Imgs src={processImg2} alt="processImg" $width={"410px"} />
                            ET +EF 고도처리
                            <GreyDescription>
                                (탁도 및색도 제거)
                            </GreyDescription>
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <Imgs src={processImg3} alt="processImg" $width={"410px"} />
                            미세 부유물질 제거
                            <EmptyDescription />
                        </ImgDescription>
                    </ImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        유기성 폐수 및 침출수 문제 해결
                    </SubTitle>
                    <FullSubContent>
                        고농도 유기물질과 난분해성 오염물질이 함유된 유기성 폐수 및 침출수는 처리가 까다로운 분야입니다.<br />
                        BlueBS는 이러한 문제를 생물학적 유동상 담체 처리 공법을 통해 해결할 수 있습니다.
                    </FullSubContent>
                    <ImgBox $width={'1500px'}>
                        <ImgDescription>
                            <Imgs src={leachate1} alt="leachate" $width={"450px"} />
                            축산폐수
                            <GreyDescription>
                                (고농도 질소, 유기물질 함유)
                            </GreyDescription>
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={leachate2} alt="leachate" $width={"450px"} />
                            음식물 폐수
                            <GreyDescription>
                                (고농도 질소, COD, 고염분 함유)
                            </GreyDescription>
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={leachate3} alt="leachate" $width={"450px"} />
                            오일 & 가스 정제 산업폐수
                            <GreyDescription>
                                (질소, COD, 다양한 이온물질/TDS 함유)
                            </GreyDescription>
                        </ImgDescription>
                    </ImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        실제 적용 사례: 녹조 제거 및 저수지 복원
                    </SubTitle>
                    <Carousel imgJson={imgJson} />
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Leachate;
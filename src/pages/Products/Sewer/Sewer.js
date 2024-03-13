import React from 'react';

//img
import sewer1 from '../../../assets/Products/Sewer/sewer1.png'
import sewer2 from '../../../assets/Products/Sewer/sewer2.png'
import sewer3 from '../../../assets/Products/Sewer/sewer3.png'
import sewer4 from '../../../assets/Products/Sewer/sewer4.png'
import sewer5 from '../../../assets/Products/Sewer/sewer5.png'
import sewer6 from '../../../assets/Products/Sewer/sewer6.png'
import sewerProcess from '../../../assets/Products/Sewer/sewerProcess.svg'
import applyImg1 from '../../../assets/Products/Sewer/apply1.png'

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
    ProcessImg,
    ImgBox,
    ImgDescription,
    GreyDescription,
    Imgs,
    DifferentImgs,
} from './style'

//carousel
import Carousel from '../ApplyCarousel/ApplyCarousel';

const Sewer = () => {
    const imgJson = [
        {
            src: applyImg1,
            alt: 'applyImg'
        },
        {
            src: applyImg1,
            alt: 'applyImg'
        },
    ];
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Products · 하/폐수 재이용 시스템
                    <TitleMainText>
                        하/폐수 재이용 시스템
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        하/폐수 재이용 프로세스
                    </SubLargeTitle>
                    <ProcessImg src={sewerProcess} alt="sewerProcess" />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        전기촉매 필터의 필요성
                    </SubTitle>
                    <FullSubContent>
                        산업 과정에서는 다양하고 복잡한 성분이 포함된 폐수가 발생하여 처리가 어렵습니다.
                        그러나 전기환원과 산화 촉매 공정을 통해 이러한 산업 폐수 문제를 해결할 수 있습니다.
                    </FullSubContent>
                    <ImgBox>
                        <ImgDescription>
                            <Imgs src={sewer1} alt="sewer" />
                            리튬 배터리 생산 폐수
                            <GreyDescription>
                                (유기 인, 등유)
                            </GreyDescription>
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={sewer2} alt="sewer" />
                            제약 폐수
                            <GreyDescription>
                                (난분해성 COD, 염분)
                            </GreyDescription>
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={sewer3} alt="sewer" />
                            오일 & 가스 정제 산업폐수
                            <GreyDescription>
                                (석유 탄화수소, 페놀, 암모니아)
                            </GreyDescription>
                        </ImgDescription>
                    </ImgBox>
                    <ImgBox>
                        <ImgDescription>
                            <Imgs src={sewer4} alt="sewer" />
                            육류 및 식품 가공 폐수
                            <GreyDescription>
                                (COD, 암모늄, 황산염, 염화물)
                            </GreyDescription>
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={sewer5} alt="sewer" />
                            염색/제지 폐수
                            <GreyDescription>
                                (난분해성COD)
                            </GreyDescription>
                        </ImgDescription>
                        <ImgDescription>
                            <Imgs src={sewer6} alt="sewer" />
                            반도체 폐수
                            <GreyDescription>
                                (질소, 인산염, 불소, 음이온 물질)
                            </GreyDescription>
                        </ImgDescription>
                    </ImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        실제 적용 사례: 하/폐수 재이용
                    </SubTitle>
                    <Carousel imgJson={imgJson} />
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Sewer;
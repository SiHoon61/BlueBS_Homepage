import React from 'react';

//img
import processImg1 from '../../../assets/Products/Agriculture/process1.png'
import processImg2 from '../../../assets/Products/Agriculture/process2.png'
import processImg3 from '../../../assets/Products/Agriculture/process3.png'
import agriculture1 from '../../../assets/Products/Agriculture/agriculture1.png'
import agriculture2 from '../../../assets/Products/Agriculture/agriculture2.png'
import applyImg1 from '../../../assets/Products/Agriculture/apply1.png'
import applyImg2 from '../../../assets/Products/Agriculture/apply2.png'
import applyImg3 from '../../../assets/Products/Agriculture/apply3.png'
//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    SubImgContainer,
    SubLargeTitle,
    SubTitle,
    FullSubContent,
    SubImgTitle,
    SubImgContent,
    SubImg,
    ProcessBox,
    ProcessImgs,
    ProcessArrow,
    ImgDescription,
    GreyDescription,
    EmptyDescription,
    SubRowContainer,
} from './style'

//carousel
import Carousel from '../ApplyCarousel/ApplyCarousel';


const Agriculture = () => {
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
        }
    ];
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Products · 농업 용수 FDA/MSF 여과기
                    <TitleMainText>
                        농업 용수 FDA/MSF 여과기
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        농업용수 공급 프로세스
                    </SubLargeTitle>
                    <FullSubContent>
                        여름철 홍수기에는 탁도 증가와 녹조류 발생으로 인해 하천, 저수지, 강의 취수원수가 농업용수로 사용하기에 문제가 됩니다.<br />
                        이러한 문제를 해결하기 위해 전기촉매 타워(ET)와 필터(MSF)를 이용하여 농업용수를 연중 안전하게 공급하고 있습니다.
                    </FullSubContent>
                    <ProcessBox>
                        <ImgDescription>
                            <ProcessImgs src={processImg1} alt="processImg" />
                            탁도 높은 물과 녹조류 발생
                            <EmptyDescription />
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <ProcessImgs src={processImg2} alt="processImg" />
                            녹조 제거 ET+ EF 혼용기술
                            <EmptyDescription />
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <ProcessImgs src={processImg3} alt="processImg" />
                            안전하고 건강한 용수 공급
                            <GreyDescription>
                                (국내 최초 및 최대 실적 확보)
                            </GreyDescription>
                        </ImgDescription>
                    </ProcessBox>
                </SubColumnContainer>
                <SubRowContainer>
                    <SubImgContainer>
                        <SubImgTitle
                            $width={'700px'}
                            $margin={'50px 0 35px 0'}
                        >
                            원예 시설 단지
                        </SubImgTitle>
                        <SubImgContent $width={'700px'}>
                            BlueBS는 원예단지 시설에 최첨단 나노 살균수 기술을 도입함으로써, 식물 보호와 생산성 향상에 힘쓰고 있습니다.<br />
                            나노 살균수는 미세한 나노 입자를 이용해 물을 살균하는 기술로, 화학적 방법에 비해 환경에 더 친화적이며 식물에도 안전합니다.
                        </SubImgContent>
                    </SubImgContainer>
                    <SubImg
                        src={agriculture1}
                        alt="agriculture"
                        $width={'750px'}
                        $margin={'0 0 0 50px'}
                    />
                </SubRowContainer>
                <SubRowContainer>
                    <SubImg
                        src={agriculture2}
                        alt="agriculture"
                        $width={'650px'}
                        $margin={'0 50px 0 0'}
                    />
                    <SubImgContainer>
                        <SubImgTitle
                            $width={'800px'}
                            $margin={'150px 0 35px 0'}
                        >
                            스마트 팜
                        </SubImgTitle>
                        <SubImgContent $width={'800px'}>
                            BlueBS는 첨단 정수 시스템을 통해 스마트팜에 공급되는 물을 정수하고, 이를 통해 농작물이 최적의 조건에서 성장할 수 있도록 지원합니다. <br />
                            스마트팜의 농업용수를 4계절 내내 안전하게 공급함으로써, 스마트팜이 지속 가능한 농업 실천을 할 수 있도록 돕습니다.
                        </SubImgContent>
                    </SubImgContainer>
                </SubRowContainer>
                <SubColumnContainer>
                    <SubTitle>
                        실제 적용 사례: 농업용수 공급
                    </SubTitle>
                    <Carousel imgJson={imgJson} />
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Agriculture;
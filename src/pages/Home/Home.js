import React, { useState, useEffect } from 'react';

//assets
import mainVideo from '../../assets/videos/main.mp4';

//style
import {
    Video,
    VideoContainer,
    ScrollDown,
    DownImg,
    TechContainer,
    TechText,
    TechSubIndexContainer,
    Tech1,
    Tech2,
    Tech3,
    Tech4,
    TechTextContainer,
    TechTextBox,
    TectTextArrow,
    BusinessContainer,
    BusinessTextBox,
    BusinessText,
    ProductsContainer,
    ProductsText,
    NewsContainer,
    NewsText,
} from './style';

//carousel
import BusinessCarousel from './businessCarousel/BusinessCarousel'
import ProductsCarousel from './ProductsCarousel/ProductsCarousel'

function useWindowSize() {

    // 초기 state 값은 with undefined width/height로 세팅한다.
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // window resize를 위한 핸들러
        function handleResize() {
            // 윈도우의 넓이/높이(width/height)를 set을 해준다
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // 이벤트 리스너 부착
        window.addEventListener("resize", handleResize);

        // 핸들러를 바로 불러서 state가 초기 window size로 업데이트 될 수 있도록한다
        handleResize();

        //이벤트리스너 제거 그리고 청소
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

const Home = () => {
    const size = useWindowSize();
    return (
        <>
            <VideoContainer $height={size.height}>
                <Video muted autoPlay loop>
                    <source src={mainVideo} type="video/mp4" />
                </Video>
                <ScrollDown>
                    Scroll Down
                    <DownImg />
                </ScrollDown>
            </VideoContainer>

            <TechContainer>
                <TechText>
                    Technology
                </TechText>
                <TechSubIndexContainer $width={size.width}>
                    <Tech1 $width={size.width / 4} >
                        <TechTextContainer>
                            신개념 초격차
                            <TechTextBox>
                                전기촉매필터
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </Tech1>
                    <Tech2 $width={size.width / 4} >
                        <TechTextContainer>
                            초고속
                            <TechTextBox>
                                전기촉매타워
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </Tech2>
                    <Tech3 $width={size.width / 4} >
                        <TechTextContainer>
                            무약품 세정
                            <TechTextBox>
                                마이크로 여과필터
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </Tech3>
                    <Tech4 $width={size.width / 4} >
                        <TechTextContainer>
                            막힘 없는
                            <TechTextBox>
                                울트라 나노버블
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </Tech4>
                </TechSubIndexContainer>
            </TechContainer>

            <BusinessContainer>
                <BusinessTextBox>
                    <BusinessText>
                        Business
                    </BusinessText>
                </BusinessTextBox>
                <BusinessCarousel />
            </BusinessContainer>

            <ProductsContainer>
                <ProductsText>
                    Products
                </ProductsText>
                <ProductsCarousel />
            </ProductsContainer>

            <NewsContainer>
                <NewsText>
                    News
                </NewsText>
            </NewsContainer>
        </>

    );
};

export default Home;
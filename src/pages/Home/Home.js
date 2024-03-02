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
    TechLeftImg,
    TechMiddleImg,
    TechRightImg,
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
                    <TechLeftImg $width={size.width / 3} >
                        <TechTextContainer>
                            신개념 초격차
                            <TechTextBox>
                                전기촉매장치
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </TechLeftImg>
                    <TechMiddleImg $width={size.width / 3} >
                        <TechTextContainer>
                            무약품 세정
                            <TechTextBox>
                                FDA/MSF 여과장치
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </TechMiddleImg>
                    <TechRightImg $width={size.width / 3} >
                        <TechTextContainer>
                            막힘 없는
                            <TechTextBox>
                                나노버블장치
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </TechRightImg>
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
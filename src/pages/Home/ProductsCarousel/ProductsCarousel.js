import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productsSliderStyles.css"

//img
import products1 from '../../../assets/Home/products1.png'
import products2 from '../../../assets/Home/products2.png'
import products3 from '../../../assets/Home/products3.png'
import products4 from '../../../assets/Home/products4.png'
import products5 from '../../../assets/Home/products5.png'
import products6 from '../../../assets/Home/products6.png'

//style
import {
    SliderContainer,
    ProductsBox,
    ProductsImg,
    ProductsOddText,
    ProductsEvenText,
    ProductsTitleText,
    ProductsEmptyBox,
    NextTo,
    Prev,
} from './style';


function SwipeToSlide() {
    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );

    const settings = {
        className: "center2",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        nextArrow: (
            <SlickButtonFix>
                <NextTo />
            </SlickButtonFix>
        ),
        prevArrow: (
            <SlickButtonFix>
                <Prev />
            </SlickButtonFix>
        )

    };
    return (
        <SliderContainer className="slider-container2">
            <Slider {...settings}>
                <ProductsBox>
                    <ProductsOddText>
                        <ProductsTitleText>
                            음용수·생활용수·담수화
                        </ProductsTitleText>
                        전기촉매 기술을 활용해 맛냄새 유발물질인 2-MIB를 제거하는 시스템을 제공합니다.
                    </ProductsOddText>
                    <ProductsImg src={products1} alt="products1">
                    </ProductsImg>
                </ProductsBox>

                <ProductsBox>
                    <ProductsImg src={products2} alt="products2">
                    </ProductsImg>
                    <ProductsEvenText>
                        <ProductsTitleText>
                            하/폐수 재이용
                        </ProductsTitleText>
                        하수 및 폐수를 초고도로 재이용하여 친환경 수자원으로 다시 활용합니다
                    </ProductsEvenText>
                </ProductsBox>

                <ProductsBox>
                    <ProductsOddText>
                        <ProductsTitleText>
                            FDA/MSF 농업
                        </ProductsTitleText>
                        전기촉매 타워(ET)와 필터(EF)를 이용하여 농업용수를 연중 안전하게 공급합니다.
                    </ProductsOddText>
                    <ProductsImg src={products3} alt="products3">
                    </ProductsImg>
                </ProductsBox>

                <ProductsBox>
                    <ProductsImg src={products4} alt="products4">
                    </ProductsImg>
                    <ProductsEvenText>
                        <ProductsTitleText>
                            축산분뇨 처리
                        </ProductsTitleText>
                        고농도 축산분뇨를 초고도 처리하여 물을 재이용할 수 있게 하는 전기화학적 기술을 제공합니다.
                    </ProductsEvenText>
                </ProductsBox>

                <ProductsBox>
                    <ProductsOddText>
                        <ProductsTitleText>
                            녹조/저수지 복원 및 유지
                        </ProductsTitleText>
                        녹조, 부유물질, T-N, T-P, BOD, COD 등의 오염물질 저감을 위해 최적화된 기술을 제공합니다
                    </ProductsOddText>
                    <ProductsImg src={products5} alt="products5">
                    </ProductsImg>
                </ProductsBox>

                <ProductsBox>
                    <ProductsImg src={products6} alt="products6">
                    </ProductsImg>
                    <ProductsEvenText>
                        <ProductsTitleText>
                            침출수 처리
                        </ProductsTitleText>
                        전기 촉매(OH 라디칼)를 이용하여 산화, 흡착, 응집의 과정을 통해 침출수를 처리하는 기술을 제공합니다.
                    </ProductsEvenText>
                </ProductsBox>

                <ProductsBox>
                    <ProductsEmptyBox>

                    </ProductsEmptyBox>
                </ProductsBox>

                <ProductsBox>
                    <ProductsEmptyBox>

                    </ProductsEmptyBox>
                </ProductsBox>

            </Slider>
        </SliderContainer>
    );
}

export default SwipeToSlide;
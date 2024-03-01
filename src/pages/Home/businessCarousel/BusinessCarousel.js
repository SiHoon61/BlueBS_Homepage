import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./businessSliderStyles.css";

//img
import business1 from '../../../assets/Home/business1.svg'
import business2 from '../../../assets/Home/business2.svg'
import business3 from '../../../assets/Home/business3.svg'
import business4 from '../../../assets/Home/business4.svg'
import business5 from '../../../assets/Home/business5.svg'
import business6 from '../../../assets/Home/business6.svg'
import business7 from '../../../assets/Home/business7.svg'

import {
    SliderContainer,
    NextTo,
    Prev,
    ImageBox,
    BusinessImage,
    BusinessTextBox,
    BusinessTitleText,

} from './style'


function CenterMode() {
    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );

    const settings = {
        className: "center1",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
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

        <SliderContainer className="slider-container1">
            <Slider {...settings}>
                <ImageBox>
                    <BusinessImage $src={business1}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                정수 분야
                            </BusinessTitleText>
                            BlusBS의 혁신적인 정수 기술을 통해 우리가 마시는 물을 안전하게 공급합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business2}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                하·폐수 분야
                            </BusinessTitleText>
                            하수 및 폐수를 초고도로 재이용하여 친환경 수자원으로 다시 활용됩니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business3}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                농업 분야
                            </BusinessTitleText>
                            농업을 숨쉬게 하는 물, BlueBS가 함께합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business4}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                축산 분야
                            </BusinessTitleText>
                            전기 촉매 전극 시스템을 활용하여 고농도 오염물을 효과적으로 처리합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business5}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                녹조 분야
                            </BusinessTitleText>
                            오염물질의 저감을 위한 최적화된 기술을 보유하고 있습니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business6}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                침출수 분야
                            </BusinessTitleText>
                            전기 촉매를 활용하여 산화, 흡착, 응집을 통해 폐수를 처리합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business7}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                운영관리 분야
                            </BusinessTitleText>
                            설계, 제작, 시공, 및 시운전에 이르기까지 모든 솔루션을 제공합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
            </Slider>
        </SliderContainer>
    );
}

export default CenterMode;
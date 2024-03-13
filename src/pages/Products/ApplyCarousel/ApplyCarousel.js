import React, { useState } from "react";
import Slider from "react-slick";

//img
import arrow from "../../../assets/arrow.png"
import blueLogo from "../../../assets/blueLogo.svg"
import whiteLogo from "../../../assets/whiteLogo.svg"

//library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./applySliderStyles.css"
import styled from 'styled-components';

//stlye

const SliderContainer = styled.div`
    margin-top: 35px;
    width: 1500px;
`

const NextTo = styled.div`
    background-image: url(${arrow});
    background-size: contain;
    height: 40px;
    width: 40px;
`

const Prev = styled.div`
    transform: rotate(180deg);
    background-image: url(${arrow});
    background-size: contain;
    height: 40px;
    width: 40px;
`

const ImgContainer = styled.div`
    height: 700px;
    align-items: center;
    align-content: center;
    vertical-align: middle;
    
`

const Img = styled.img`
    margin: auto auto;
`


function SimpleSlider(imgProps) {
    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );
    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
        ),
    };
    return (
        <SliderContainer className="apply">
            <Slider {...settings}>
                {imgProps.imgJson.map((list, index) => (
                    <ImgContainer>
                        <Img
                            src={list.src}
                            alt={list.alt}
                            key={index} />
                    </ImgContainer>
                ))}
            </Slider>
        </SliderContainer>
    );
}

export default SimpleSlider;
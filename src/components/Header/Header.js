import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

//style
import {
    Container,
    WhiteLogo,
    BlueLogo,
    IndexContainer,
    IndexLI,
    IndexUL,
    EmptyBox,
    HoverBox,
    TextTextBox,
} from './style';


const Header = () => {
    //navigation
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }
    const goCeoGreeting = () => {
        navigate("/greeting");
    }
    const goHistory = () => {
        navigate("/history");
    }
    const goAwards = () => {
        navigate("/awards");
    }
    const goElectroCatalyst = () => {
        navigate("/electroCatalyst");
    }
    const goFilter = () => {
        navigate("/filter");
    }

    const goMap = () => {
        navigate("/map");
    }
    
    //마우스 호버
    const [companyHovered, setCompanyHovered] = useState(false);
    const [technologyHovered, setTechnologyHovered] = useState(false);
    const [businessHovered, setBusinessHovered] = useState(false);
    const [productsHovered, setProductsHovered] = useState(false);
    const [communicationHovered, setCommunicationHovered] = useState(false);


    //스크롤 감지
    const [headerStyle, setHeaderStyle] = useState("top");
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos === 0) {
                setHeaderStyle("top");
            } else if (currentScrollPos > 50) {
                setHeaderStyle("scrolling");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <Container $state={headerStyle}>
            {headerStyle === 'top' ? <WhiteLogo onClick={goHome}></WhiteLogo> : <BlueLogo onClick={goHome}></BlueLogo>}
            <IndexContainer>
                <IndexUL>
                    <IndexLI onMouseEnter={() => setCompanyHovered(true)}
                        onMouseLeave={() => setCompanyHovered(false)}
                    >Company
                        <HoverBox
                            $isHovered={companyHovered}
                            $width={140}>
                            <TextTextBox onClick={goCeoGreeting}>CEO 인사말</TextTextBox>
                            <TextTextBox onClick={goHistory}>연혁</TextTextBox>
                            <TextTextBox onClick={goAwards}>인증 및 수상</TextTextBox>
                            <TextTextBox onClick={() => alert('오시는길!')}>기업 부설 연구소</TextTextBox>
                        </HoverBox>
                    </IndexLI>
                    <IndexLI onMouseEnter={() => setTechnologyHovered(true)}
                        onMouseLeave={() => setTechnologyHovered(false)}>Technology
                        <HoverBox
                            $isHovered={technologyHovered}
                            $width={170}>
                            <TextTextBox onClick={goElectroCatalyst}>전기촉매 장치</TextTextBox>
                            <TextTextBox onClick={goFilter}>FDA/MSF 여과 장치</TextTextBox>
                            <TextTextBox onClick={() => alert('나노버블 장치!')}>나노버블 장치</TextTextBox>
                        </HoverBox>
                    </IndexLI>
                    <IndexLI onMouseEnter={() => setBusinessHovered(true)}
                        onMouseLeave={() => setBusinessHovered(false)}>Business
                        <HoverBox
                            $isHovered={businessHovered}
                            $width={130}>
                            <TextTextBox onClick={() => alert('CEO 인사말!')}>정수 분야</TextTextBox>
                            <TextTextBox onClick={() => alert(' 연혁!')}>하/폐수 분야</TextTextBox>
                            <TextTextBox onClick={() => alert('인증 및 수상!')}>농업 분야</TextTextBox>
                            <TextTextBox onClick={() => alert('오시는길!')}>축산 분야</TextTextBox>
                            <TextTextBox onClick={() => alert('오시는길!')}>녹조 분야</TextTextBox>
                            <TextTextBox onClick={() => alert('오시는길!')}>침출수 분야</TextTextBox>
                            <TextTextBox onClick={() => alert('오시는길!')}>운영관리 분야</TextTextBox>
                        </HoverBox>
                    </IndexLI>
                    <IndexLI onMouseEnter={() => setProductsHovered(true)}
                        onMouseLeave={() => setProductsHovered(false)}>Products
                        <HoverBox
                            $isHovered={productsHovered}
                            $width={195}>
                            <TextTextBox onClick={() => alert('CEO 인사말!')}>음용수/생활용수/담수화</TextTextBox>
                            <TextTextBox onClick={() => alert(' 연혁!')}>하수/폐수 재이용</TextTextBox>
                            <TextTextBox onClick={() => alert('인증 및 수상!')}>FDA/MSF 농업</TextTextBox>
                            <TextTextBox onClick={() => alert('오시는길!')}>축산분뇨 처리</TextTextBox>
                            <TextTextBox onClick={() => alert('오시는길!')}>녹조/저수지 복원 및 유지</TextTextBox>
                            <TextTextBox onClick={() => alert('오시는길!')}>고농도 침출수 처리</TextTextBox>
                        </HoverBox>
                    </IndexLI>
                    <IndexLI onMouseEnter={() => setCommunicationHovered(true)}
                        onMouseLeave={() => setCommunicationHovered(false)}>Communication
                        <HoverBox
                            $isHovered={communicationHovered}
                            $width={90}>
                            <TextTextBox onClick={() => alert('CEO 인사말!')}>뉴스룸</TextTextBox>
                            <TextTextBox onClick={goMap}>오시는길</TextTextBox>
                        </HoverBox>
                    </IndexLI>
                </IndexUL>
            </IndexContainer>
            <EmptyBox />
        </Container>
    );
};

export default Header;
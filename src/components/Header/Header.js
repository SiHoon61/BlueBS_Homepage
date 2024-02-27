import React, { useState, useEffect } from 'react';

//style
import {
    Container,
    WhiteLogo,
    BlueLogo,
    IndexContainer,
    IndexLI,
    IndexUL,
    EmptyBox,
} from './style';


const Header = () => {
    const [headerStyle, setHeaderStyle] = useState("top");

    //스크롤 감지
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            console.log(currentScrollPos);
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
            {headerStyle === 'top' ? <WhiteLogo></WhiteLogo> : <BlueLogo></BlueLogo>}
            <IndexContainer>
                <IndexUL>
                    <IndexLI>Company</IndexLI>
                    <IndexLI>Technology</IndexLI>
                    <IndexLI>Busness</IndexLI>
                    <IndexLI>Products</IndexLI>
                    <IndexLI>Communication</IndexLI>
                </IndexUL>
            </IndexContainer>
            <EmptyBox />
        </Container>
    );
};

export default Header;
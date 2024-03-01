import React from 'react';



//style
import {
    Container,
    WhiteLogo,
    TextBox,
    CompanyName,
    CompanyInformation,
    EmptyBox,
} from './Style';

const Bottom = () => {
    return (
        <Container>
            <WhiteLogo />

            <TextBox>
                <CompanyName>
                    (주)블루비에스
                </CompanyName>
                <CompanyInformation>
                    대표: 홍 민
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    주소: 경기도 수원시 권선구 서호로 89 서울대 농생명과학센터 2동 202호
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    전화번호: 031-292-1447
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    FAX: 031-292-1448
                </CompanyInformation>
            </TextBox>
            <EmptyBox />
        </Container>
    );
};

export default Bottom;
import React from 'react';

//img
import monitoringBody from '../../../assets/Business/Monitoring/MonitoringBody.png'
import performanceImg from '../../../assets/Business/Monitoring/performanceImg.png'

//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    SubLargeTitle,
    SubLargeContainer,
    SubTitle,

    FullSubContent,
    BodyImg,
    FullImg,
} from './style'

const Monitoring = () => {

    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Business · 운영관리분야
                    <TitleMainText>
                        운영관리분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubLargeContainer>
                    <SubLargeTitle>
                        운영관리 분야
                    </SubLargeTitle>
                    <FullSubContent>
                        EF 전기촉매-FDA/MSF 여과기에 대한 설계, 제작, 시공, 시운전에 이르는 전체 솔루션을 제공합니다.<br />
                        휴대폰 및 태블릿 PC를 통한 원격 모니터링 관리가 가능합니다.
                    </FullSubContent>
                </SubLargeContainer>
                <BodyImg $imageUrl={monitoringBody} />
                <SubColumnContainer>
                    <SubTitle>
                        운영관리 시스템
                    </SubTitle>
                    <FullImg src={performanceImg} alt="performanceImg" />
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Monitoring;
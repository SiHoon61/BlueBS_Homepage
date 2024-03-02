import React, { useState, useEffect } from 'react';

import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    HistoryStart,
    LogoImg,
    BigYear,
    Year,
    LineImg,
    Bigcontent,
    Month,
    Content,
    MiddleContainer,
    MiddleHistoryContainer,
    ImgContainer,
    Img2007,
    Img2011,
    ImgDescription,
} from './style'

const History = () => {
    const [is2007Fixed, setIs2007Fixed] = useState(false);
    const [is2011Fixed, setIs2011Fixed] = useState(false);

    const fixed2007Start = 550;
    const fixed2011Start = 1220;
    const fixed2016Start = 1920;
    const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll >= fixed2007Start && currentScroll <= (fixed2011Start + 300)) {
            setIs2007Fixed(true);
        } else {
            setIs2007Fixed(false);
        }
        if (currentScroll >= fixed2011Start && currentScroll <= fixed2016Start) {
            setIs2011Fixed(true);
            console.log(currentScroll);
        } else {
            setIs2011Fixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Company · 연혁
                    <TitleMainText>
                        연혁
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <HistoryStart>
                    <LogoImg />
                    <BigYear>
                        2007. 08
                    </BigYear>
                    <Bigcontent>
                        (주) 블루인바이로먼트엔텍 설립<br />
                        농림부 프로젝트 참여기업 (ARPC 농업기술센터)
                    </Bigcontent>
                </HistoryStart>
                <MiddleContainer>
                    <ImgContainer $isFixed={is2007Fixed}>
                        2007 ~ 2010
                        <Img2007 />
                        <ImgDescription>
                        </ImgDescription>
                    </ImgContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2008
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            재단법인 서울대학교 산학협력재단 기술이전 계약체결
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            농업과학기술개발공동연구사업 서울대학교 산학협력단장 협약서 체결
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2009
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                09
                            </Month>
                            벤처기업인증
                        </Content>
                        <Content>
                            <Month>
                                12
                            </Month>
                            기업부설연구소 인증
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2010
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            녹색경영대상 수상
                        </Content>
                    </MiddleHistoryContainer>
                    <Img2011 $isFixed={is2011Fixed} />
                    <MiddleHistoryContainer>
                        <Year>
                            2011
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                01
                            </Month>
                            녹색기술인증 (제 GT-11-00001호)
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            환경부장관 표창장 수상
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            녹색전문기업 확인
                        </Content>
                        <Content>
                            <Month>
                                08
                            </Month>
                            글로벌탑 환경기술개발사업 프로젝트 수행
                        </Content>
                        <Content>
                            <Month>
                                09
                            </Month>
                            농림기술개발 생명산업기술개발사업 프로젝트
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2012
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                09
                            </Month>
                            주)블루비에스 상호 변경
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2013
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                09
                            </Month>
                            제 16회 농림축산식품과학기술대상 표창
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2014
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            농어촌공사 성과공유제 체결
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            농어촌연구원 이동식 차량 녹조 시스템 프로젝트 수행
                        </Content>
                        <Year>
                            2015
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            농어촌연구원 저수지 수질 개선위한 녹조선 시스템 개발 MOU 체결
                        </Content>
                        <Content>
                            <Month>
                                08
                            </Month>
                            한국과학기술원, 건설기술연구원 낙동강 녹조 제거 기술 협약
                        </Content>
                        <Content>
                            <Month>
                                10
                            </Month>
                            2015 WEFTEC 전시참여 (미국시카고)
                        </Content>
                        <Year>
                            2016
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                02
                            </Month>
                            한국건설기술연구원 정수장 전처리 시스템 개발 및 상용화
                        </Content>
                        <Content>
                            <Month>
                                03
                            </Month>
                            농림부, 농어촌공사, KT 공동 (방글라데시 농업담수화 시스템 모니터링 )
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            한국농어촌연구원 가뭄대비 차량용 기수담수화시스템 연구용역 및 실증
                        </Content>
                        <Content>
                            <Month>
                                10
                            </Month>
                            녹색기술인증(제GT-16-00123호)
                        </Content>
                        <Year>
                            2017
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                04
                            </Month>
                            물 4차산업혁명 국회의정 발표 ( 가뭄대비 고도수처리 기술)
                        </Content>
                        <Content>
                            <Month>
                                12
                            </Month>
                            2017년 제주도 하수도 연찬회 ( 재이용 담수화 적용 사례)
                        </Content>
                        <Year>
                            2018
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                04
                            </Month>
                            정수장 전처리 녹조제거 시연회 (과학기술부)
                        </Content>
                        <Content>
                            <Month>
                                12
                            </Month>
                            인도네시아 공업용수 공급 FS 기술계약
                        </Content>
                        <Year>
                            2019
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            한국건설기술연구원 패밀리 기업 협약
                        </Content>
                        <Year>
                            2020
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                01
                            </Month>
                            녹색기술 인증 (초고속 고액분리 장치를 이용한 재이용 기술)
                        </Content>
                        <Year>
                            2022
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                10
                            </Month>
                            혁신제품 조달청 등록
                        </Content>
                        <Content>
                            <Month>
                                10
                            </Month>
                            SK에코플랜트 공동 기술 개발 협약
                        </Content>
                        <Content>
                            <Month>
                                12
                            </Month>
                            농림식품 NET 신기술 등록
                        </Content>
                        <Year>
                            2023
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                01
                            </Month>
                            녹색기술 인증
                        </Content>
                        <Content>
                            <Month>
                                04
                            </Month>
                            한국농어촌공사 KRC 신기술 등록
                        </Content>
                        <Content>
                            <Month>
                                11
                            </Month>
                            농림축산식품과학기술대상 표창
                        </Content>
                    </MiddleHistoryContainer>


                </MiddleContainer>
            </MainContainer>
        </>
    );
};

export default History;
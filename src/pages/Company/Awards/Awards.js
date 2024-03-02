import React, { useState } from 'react';

//img
import certification1 from '../../../assets/Company/Awards/certification1.png'
import certification2 from '../../../assets/Company/Awards/certification2.png'
import certification3 from '../../../assets/Company/Awards/certification3.png'
import certification4 from '../../../assets/Company/Awards/certification4.png'
import certification5 from '../../../assets/Company/Awards/certification5.png'
import certification6 from '../../../assets/Company/Awards/certification6.png'
import certification7 from '../../../assets/Company/Awards/certification7.png'
import certification8 from '../../../assets/Company/Awards/certification8.png'
import certification9 from '../../../assets/Company/Awards/certification9.png'
import certification10 from '../../../assets/Company/Awards/certification10.png'
import certification11 from '../../../assets/Company/Awards/certification11.png'
import award1 from '../../../assets/Company/Awards/award1.png'
import award2 from '../../../assets/Company/Awards/award2.png'
import award3 from '../../../assets/Company/Awards/award3.png'
import award4 from '../../../assets/Company/Awards/award4.png'
import award5 from '../../../assets/Company/Awards/award5.png'
import patent0 from '../../../assets/Company/Awards/patent0.png'
import patent1 from '../../../assets/Company/Awards/patent1.png'
import patent2 from '../../../assets/Company/Awards/patent2.png'
import patent3 from '../../../assets/Company/Awards/patent3.png'
import patent4 from '../../../assets/Company/Awards/patent4.png'
import patent5 from '../../../assets/Company/Awards/patent5.png'
import patent6 from '../../../assets/Company/Awards/patent6.png'
import patent8 from '../../../assets/Company/Awards/patent8.png'
import patent9 from '../../../assets/Company/Awards/patent9.png'
import patent10 from '../../../assets/Company/Awards/patent10.png'
import patent11 from '../../../assets/Company/Awards/patent11.png'
import patent12 from '../../../assets/Company/Awards/patent12.png'
import patent13 from '../../../assets/Company/Awards/patent13.png'
import patent14 from '../../../assets/Company/Awards/patent14.png'
import patent15 from '../../../assets/Company/Awards/patent15.png'
import patent16 from '../../../assets/Company/Awards/patent16.png'
import patent17 from '../../../assets/Company/Awards/patent17.png'
import patent18 from '../../../assets/Company/Awards/patent18.png'
import patent19 from '../../../assets/Company/Awards/patent19.png'
import patent20 from '../../../assets/Company/Awards/patent20.png'

//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    ButtonBox,
    CertificationButtonText,
    AwardsButtonText,
    PatentButtonText,
    EmptyColumn,
    CertificationPart,
    AwardsPart,
    PatentPart,
    RowContainer,
    AwardBox,
    EmptyBox,
    AwardDescription,
    AwardName,
    AwardImg,
    NoBorderAwardImg,
    PatentName,
} from './style'

const Awards = () => {
    const [isSelect, setIsSelect] = useState('0');

    const certificationClickHandler = () => {
        setIsSelect('0');
    }

    const awardsClickHandler = () => {
        setIsSelect('1');
    }

    const patentClickHandler = () => {
        setIsSelect('2');
    }

    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Company · 인증 및 수상
                    <TitleMainText>
                        인증 및 수상
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <ButtonBox>
                    <CertificationButtonText onClick={certificationClickHandler}
                        $isSelect={isSelect}>
                        인증서
                    </CertificationButtonText>
                    <AwardsButtonText onClick={awardsClickHandler}
                        $isSelect={isSelect}>
                        수상
                    </AwardsButtonText>
                    <PatentButtonText onClick={patentClickHandler}
                        $isSelect={isSelect}>
                        특허
                    </PatentButtonText>
                </ButtonBox>
                <EmptyColumn $isSelect={isSelect} />
                <CertificationPart $isSelect={isSelect}>
                    <RowContainer>
                        <AwardBox>
                            <NoBorderAwardImg src={certification1} alt='certification1' />
                            <AwardDescription>
                                GT-11-00001
                                <AwardName>
                                    녹색기술 인증서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={certification2} alt='certification2' />
                            <AwardDescription>
                                GT-11-00001
                                <AwardName>
                                    녹색기술 인증서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={certification3} alt='certification3' />
                            <AwardDescription>
                                GE-11-00012
                                <AwardName>
                                    녹색전문기업 확인서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={certification4} alt='certification4' />
                            <AwardDescription>
                                GE-11-00012
                                <AwardName>
                                    녹색전문기업 확인서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                    </RowContainer>
                    <RowContainer>
                        <AwardBox>
                            <NoBorderAwardImg src={certification5} alt='certification5' />
                            <AwardDescription>
                                GT-16-00123
                                <AwardName>
                                    녹색기술 인증서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={certification6} alt='certification6' />
                            <AwardDescription>
                                GT-20-00822
                                <AwardName>
                                    녹색기술 인증서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={certification7} alt='certification7' />
                            <AwardDescription>
                                제 2009112311호
                                <AwardName>
                                    기업부설연구소 인정서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={certification8} alt='certification8' />
                            <AwardDescription>
                                제 20150113742호
                                <AwardName>
                                    벤처기업 확인서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                    </RowContainer>
                    <RowContainer>
                        <AwardBox>
                            <NoBorderAwardImg src={certification9} alt='certification9' />
                            <AwardDescription>
                                제 2022-351호
                                <AwardName>
                                    혁신제품 지정 인증서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={certification10} alt='certification10' />
                            <AwardDescription>
                                제 51-137호
                                <AwardName>
                                    신기술 인증서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={certification11} alt='certification11' />
                            <AwardDescription>
                                제 2023-7호
                                <AwardName>
                                    KRC신기술 인증서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <EmptyBox />
                    </RowContainer>
                </CertificationPart>
                <AwardsPart $isSelect={isSelect}>
                    <RowContainer>
                        <AwardBox>
                            <AwardImg src={award1}
                                alt='award' />
                            <AwardDescription>
                                <AwardName>
                                    녹색경영대상
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={award2}
                                alt='award' />
                            <AwardDescription>
                                <AwardName>
                                    미래선도 기업 인증서
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={award3}
                                alt='award' />
                            <AwardDescription>
                                <AwardName>
                                    환경부장관 표창장
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <NoBorderAwardImg src={award4}
                                alt='award' />
                            <AwardDescription>
                                <AwardName>
                                    농림축산식품부장관 표창장
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                    </RowContainer>
                    <RowContainer>
                        <AwardBox>
                            <NoBorderAwardImg src={award5}
                                alt='award' />
                            <AwardDescription>
                                <AwardName>
                                    농림축산식품부장관 표창장
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                        <EmptyBox />
                        <EmptyBox />
                        <EmptyBox />
                    </RowContainer>
                </AwardsPart>
                <PatentPart $isSelect={isSelect}>
                    <RowContainer>
                        <AwardBox>
                            <NoBorderAwardImg src={patent0}
                                alt='patent' />
                            <AwardDescription>
                                <PatentName>
                                    전기분해를 이용한 질소, 인 제거 방법 및 장치
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent1}
                                alt='patent' />
                            <AwardDescription>
                                제 10-0839026호
                                <PatentName>
                                    기수의 담수화시스템 및 이를 이용하여 기수를 농업 재이용수로 전환하는 방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent2}
                                alt='patent' />
                            <AwardDescription>
                                제 10-0893565호
                                <PatentName>
                                    기수의 농도별 염분제거 시스템 및 이를 이용한 염분제거 방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent3}
                                alt='patent' />
                            <AwardDescription>
                                제 10-0895524호
                                <PatentName>
                                    농업용 청정수 공급시스템 및 이를 이용한 농업용 청정수로의 전환방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                    </RowContainer>
                    <RowContainer>
                        <AwardBox>
                            <AwardImg src={patent4}
                                alt='patent' />
                            <AwardDescription>
                                제 10-0909477호
                                <PatentName>
                                    철 이온화 모듈을 포함하는 농업용수 재활용 시스템 및 이를 이용한 농업용수 재활용 방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent5}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1131383호
                                <PatentName>
                                    공업용수 및 음용수 공급장치
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent6}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1176988호
                                <PatentName>
                                    기수의 담수화 처리장치 및 이를 이용한 기수의 담수화 방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent8}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1192809호
                                <PatentName>
                                    극미세 버블수 발생장치
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                    </RowContainer>
                    <RowContainer>
                        <AwardBox>
                            <AwardImg src={patent9}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1206477호
                                <PatentName>
                                    농업용수 공급장치를 이용한 하천 및 하수처리장 방류수의 농업용수 재이용 방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent10}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1206476호
                                <PatentName>
                                    하천 및 하수처리장의 방류수를 재이용한 농업용수 공급장치
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent11}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1328570호
                                <PatentName>
                                    막 세척용 세정수 공급장치
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent12}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1612440호
                                <PatentName>
                                    초고속 고액분리 시스템을 구비하는 기수 담수화 장치
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                    </RowContainer>
                    <RowContainer>
                        <AwardBox>
                            <AwardImg src={patent13}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1612879호
                                <PatentName>
                                    하수의 질소, 인 및 부유물 제거 장치 및 방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent14}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1617369호
                                <PatentName>
                                    다중 멀티사이클론을 활용한 부유물질 및 COD 저감용 수처리 공정
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent15}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1657220호
                                <PatentName>
                                    질소와 인을 함유한 폐수의 초고속 처리 및 방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent16}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1675574호
                                <PatentName>
                                    초고속 고액분리 시스템을 구비하는 하수처리장 방류수를 재이용수로 전환하는 장치
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                    </RowContainer>
                    <RowContainer>
                        <AwardBox>
                            <AwardImg src={patent17}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1702345호
                                <PatentName>
                                    초고속 조류 제거 장치 및 방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent18}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1702346호
                                <PatentName>
                                    이동식 부유물 제거 장치 및 방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent19}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1853095호
                                <PatentName>
                                    수중 조류 제거방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                        <AwardBox>
                            <AwardImg src={patent20}
                                alt='patent' />
                            <AwardDescription>
                                제 10-1913754호
                                <PatentName>
                                    침전조 및 부상분리조를 포함하는 일체형 고액 분리장치 및 이를 이용한 분리방법
                                </PatentName>
                            </AwardDescription>
                        </AwardBox>
                    </RowContainer>
                </PatentPart>

            </MainContainer>

        </>
    );
};

export default Awards;
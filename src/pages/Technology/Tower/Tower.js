import React from 'react';

//video
import towerVideo from '../../../assets/Technology/towerVideo.mp4'
import tower1 from '../../../assets/Technology/tower1.mp4'
import tower2 from '../../../assets/Technology/tower2.mp4'

//style
import {
    TitleBar,
    TitleTextBox,
    TitleSubText,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    SubRowContainer,
    SubLargeTitle,
    SubTitle,
    FullSubContent,
    TowerVideo,
    SeparationVideoBox,
    SeparationVideo,
} from './style'

//table
import ComparisonTable from './ComparisonTable';

const Tower = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Technology · 전기 촉매 타워(ET)
                    <TitleSubText>
                        초고속
                    </TitleSubText>
                    <TitleMainText>
                        전기 촉매 타워(ET)
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        전기촉매 타워 (Electrocatalyst Tower)
                    </SubLargeTitle>
                    <FullSubContent>
                        전기촉매(Electrocatalyst)를 이용한 전기촉매타워(Electrocatalyst Tower)는 종래 용존공기부상(DAF), 디스크 섬유형여과와 달리 저약품비, 저동력, 부지집약적 등을 자랑합니다.
                    </FullSubContent>
                    <TowerVideo muted autoPlay loop>
                        <source src={towerVideo} type="video/mp4" />
                    </TowerVideo>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        전기촉매 타워 고액분리 제거 영상
                    </SubTitle>
                    <SubRowContainer>
                        <SeparationVideoBox>
                            <SeparationVideo muted autoPlay loop>
                                <source src={tower1} type="video/mp4" />
                            </SeparationVideo>
                            ET 고액분리 저농도 제거
                        </SeparationVideoBox>
                        <SeparationVideoBox>
                            <SeparationVideo muted autoPlay loop>
                                <source src={tower2} type="video/mp4" />
                            </SeparationVideo>
                            ET 고액분리 고농도 제거
                        </SeparationVideoBox>
                    </SubRowContainer>


                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        고액분리 성능 비교
                    </SubTitle>
                    <ComparisonTable />
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Tower;
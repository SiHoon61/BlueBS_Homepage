import React from 'react';

import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    NewsContainer,
    MedianLine,
} from './style';

import {
    SubColumnContainer,
    SubLargeTitle,
    SubTitle,
    FullSubContent,
} from '../../../components/Body/bodyStyle';

//News & Data
import NewsBox from '../../../components/News/News';
import DataRoom from '../../../components/DataRoom/DataRoom';

const NewsRoom = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Communication · 홍보자료실
                    <TitleMainText>
                        홍보자료실
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubTitle>
                        최신뉴스
                    </SubTitle>
                    <NewsContainer>
                        <NewsBox/>
                    </NewsContainer>
                </SubColumnContainer>
                <MedianLine/>
                <SubColumnContainer>
                    <SubTitle>
                        자료실
                    </SubTitle>
                    <NewsContainer>
                        <DataRoom />
                    </NewsContainer>
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default NewsRoom;
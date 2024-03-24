import React from 'react';


import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    NewsContainer,
} from './style';

import {
    SubColumnContainer,
    SubLargeTitle,
    SubTitle,
    FullSubContent,
} from '../../../components/Body/bodyStyle';

//NewsBox
import NewsBox from '../../../components/News/News';


const NewsRoom = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Communication · 뉴스룸
                    <TitleMainText>
                        뉴스룸
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
            </MainContainer>
        </>
    );
};

export default NewsRoom;
import React from 'react';
import { useLocation } from 'react-router-dom';

import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    BodyContainer,
    BodyHr,
    TopTitle,
    TopSubTitle,
    GreyTitle,
    BottomHr,
    BodyText,
    AttachedBox,
    AttachedFile,
    NavigateBox,
    NavigateButton,
    NavigateText,
} from './style';

import {
    SubLargeTitle,
    SubTitle,
    FullSubContent,
} from '../../../components/Body/bodyStyle';

const ReferenceRoom = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const index = query.get('index'); // 쿼리 파라미터
    const dataJson = [
        {
            title: "농업용수여과시스템 소개자료 1",
            date: "2023.12.29",
            body: "본문 내용입니다.",
            writer: "admin",
            num: 0,
        },
        {
            title: "농업용수여과시스템 소개자료 2",
            date: "2023.12.29",
            body: "본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.본문 내용입니다.",
            writer: "admin",
            num: 1,
        },
        {
            title: "농업용수여과시스템 소개자료 3",
            date: "2023.12.29",
            body: "본문 내용입니다.",
            writer: "admin",
            num: 2,
        },
        {
            title: "농업용수여과시스템 소개자료 4",
            date: "2023.12.29",
            body: "본문 내용입니다.",
            writer: "admin",
            num: 3,
        }
    ]
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
                <BodyContainer>
                    <BodyHr />
                    <TopTitle>
                        {dataJson[index].title}
                        <TopSubTitle>
                            작성자
                            <GreyTitle>
                                {dataJson[index].writer}
                            </GreyTitle>
                            작성일
                            <GreyTitle>
                                {dataJson[index].date}
                            </GreyTitle>
                        </TopSubTitle>
                    </TopTitle>
                    <BottomHr />
                    <BodyText>
                        {dataJson[index].body}
                    </BodyText>
                    <AttachedBox>
                        첨부파일
                        <AttachedFile>
                            농업용수여과시스템.pdf
                        </AttachedFile>
                    </AttachedBox>
                    <BodyHr />
                    <NavigateBox>
                        <NavigateButton>
                            이전 글
                            <NavigateText>
                                이전 글이 없습니다.
                            </NavigateText>
                        </NavigateButton>
                        <BottomHr />
                        <NavigateButton>
                            다음 글
                            <NavigateText>
                                양구군 축산분뇨처리 EF 시스템 기술자료
                            </NavigateText>
                        </NavigateButton>
                    </NavigateBox>
                    <BodyHr />
                </BodyContainer>
                
            </MainContainer>
        </>

    );
};

export default ReferenceRoom;
import React from 'react';

//img
import newsImg1 from '../../assets/Communication/news1.png'
import newsImg2 from '../../assets/Communication/news2.png'
import newsImg3 from '../../assets/Communication/news3.png'

//style
import {
    NewsBox,
    NewsImgs,
    NewsTitle,
    NewsDate,
} from './style';

const News = () => {
    const newsJson = [
        {
            title: "농림축산식품 과학기술대전 장관상 수상",
            date: "2023.12.30",
            body: "뉴스 내용",
            src: newsImg1,
            alt: 'newsImg'
        },
        {
            title: "물 4차 산업혁신 국정의정 발표 대표이사  발표",
            date: "2017.04.20",
            body: "뉴스 내용",
            src: newsImg2,
            alt: 'newsImg'
        },
        {
            title: "환경부 글로벌탑 프로젝트 수행 (막세정시스템)",
            date: "2023.12.30",
            body: "뉴스 내용",
            src: newsImg3,
            alt: 'newsImg'
        },
        {
            title: "뉴스제목3",
            date: "2024.03.15",
            body: "뉴스 내용"
        }
    ]
    return (
        <>
            {newsJson.map((list, index) => (
                <NewsBox>
                    <NewsImgs src={list.src} alt="newsImg" />
                    <NewsTitle>
                        {list.title}
                    </NewsTitle>
                    <NewsDate>
                        {list.date}
                    </NewsDate>
                </NewsBox>
            ))}

        </>
    );
};

export default News;
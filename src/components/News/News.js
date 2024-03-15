import React, { useState } from 'react';

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

//modal
import NewsModal from './NewsModal';
import ModalPortal from '../../modal/ModalPortal';

const News = () => {
    const [modalState, setModalState] = useState(false);
    const [modalSelect, setModalSelect] = useState('0');

    const handleOpenModal = (props) => {
        setModalSelect(props);
        setModalState(true);
    };
    const handleCloseModal = () => {
        setModalState(false);
    };
    const newsJson = [
        {
            title: "농림축산식품 과학기술대전 장관상 수상",
            date: "2023.12.30",
            body: "인공지능 스마트 물 관리 시스템은 취수원/원수로부터 다양한 물리화학적 기술(예, 전기촉매 필터 및 여과기술)을 적용하여 수요자 요구조건에 부합되는 양질의 물을 생산하고 수요량과 공급량 예측을 통해 최적의 물을 공급합니다. 각 배관/장치에 부착된 센서/장비/시스템의 이상진단은 “딥러닝 기반 이상진단 머신러닝”을 통해 해결하고 유지관리비/동력비 등 최적제어를 위해 능동학습 AI 기반 의사결정시스템을 통해 해결합니다.",
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
                <NewsBox key={index} onClick={() => { handleOpenModal(index) }}>
                    <NewsImgs src={list.src} alt="newsImg" />
                    <NewsTitle>
                        {list.title}
                    </NewsTitle>
                    <NewsDate>
                        {list.date}
                    </NewsDate>
                </NewsBox>
            ))}
            {modalState && (
                <ModalPortal>
                    <NewsModal onClose={handleCloseModal} show={modalState} content={newsJson[modalSelect]} />
                </ModalPortal>
            )}
        </>
    );
};

export default News;
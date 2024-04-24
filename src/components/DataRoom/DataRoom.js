import React from 'react';
import { useNavigate } from 'react-router-dom';

//img
import dataimg from '../../assets/Communication/data1.png';

//style
import {
    DataBox,
    DataImgs,
    DataDate,
    DataTitle,
} from './style';

const DataRoom = () => {
    const navigate = useNavigate();

    //post로 사진, 제목, 날짜 받아오기
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
            body: "본문 내용입니다.",
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
    
    const referenceHandler = (props) => {
        navigate(`/referenceRoom?index=${props}`);
    }

    return (
        <>
            {dataJson.map((list, index) => (
                <DataBox key={index} onClick={() => {
                    referenceHandler(list.num)
                }}>
                    <DataImgs src={dataimg} alt="dataimg" />
                    <DataTitle>
                        {list.title}
                    </DataTitle>
                    <DataDate>
                        {list.date}
                    </DataDate>
                </DataBox>
            ))}
        </>
    );
};

export default DataRoom;
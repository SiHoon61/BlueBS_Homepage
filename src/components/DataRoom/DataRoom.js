import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//style
import {
    DataBox,
    DataImgs,
    DataDate,
    DataTitle,
} from './style';

const DataRoom = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/dataroom`);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        getPosts();
    }, []);
    
    const referenceHandler = (props) => {
        navigate(`/referenceRoom`, {state: props});
    }

    return (
        <>
            {posts.map((list, index) => (
                <DataBox key={index} onClick={() => {
                    referenceHandler(list.id)
                }}>
                    <DataImgs
                        src={`data:image/jpeg;base64,${list.jpg}`}
                        alt="dataimg"
                    />
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
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//style
import {
    NewsContainer,
    Title,
    DataBox,
    DataImgs,
    DataDate,
    DataTitle,
    FixBox,
    FixButton,
    DeleteButton,
} from './style';

//modal
import FixModal from './FixModal';
import ModalPortal from '../../../modal/ModalPortal';


const AdminFix = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [modalSelect, setModalSelect] = useState('');

    const handleOpenModal = (props) => {
        setModalSelect(props);
        setModalState(true);
    };
    const handleCloseModal = () => {
        setModalState(false);
    };
    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/dataroom');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        getPosts();
    }, []);

    const referenceHandler = (props) => {
        navigate(`/AdminPage/AdminFix`, { state: props });
    }

    return (
        <>
            <NewsContainer>
                <Title>
                    수정/삭제를 원하시는 글을 선택하세요
                </Title>
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
                            <FixBox>
                                <FixButton onClick={() => {
                                    handleOpenModal([list.id, list.jpg]);
                                }}>
                                    수정
                                </FixButton>
                                <DeleteButton>
                                    삭제
                                </DeleteButton>
                            </FixBox>
                        </DataDate>
                    </DataBox>
                ))}
            </NewsContainer>
            {modalState && (
                <ModalPortal>
                    <FixModal onClose={handleCloseModal} show={modalState} content={modalSelect} />
                </ModalPortal>
            )}
        </>
    );
};

export default AdminFix;
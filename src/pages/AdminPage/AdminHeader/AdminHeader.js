import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//style
import {
    HeaderContainer,
    NavBox,
    Navcontent
} from './style';
const AdminHeader = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/logout`, {}, { withCredentials: true });
            // 로그아웃 후 홈 페이지로 리디렉션
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <HeaderContainer>
            BlueBS 관리자 페이지
            <NavBox>
                <Navcontent onClick={() => {
                    navigate('/AdminPage/AdminPost');
                }}>
                    게시판 글 작성
                </Navcontent>
                <Navcontent onClick={() => {
                    navigate('/AdminPage/AdminFix');
                }}>
                    게시판 글 삭제 / 수정
                </Navcontent>
                <Navcontent onClick={handleLogout}>
                    로그아웃
                </Navcontent>
            </NavBox>
        </HeaderContainer>
    );
};

export default AdminHeader;
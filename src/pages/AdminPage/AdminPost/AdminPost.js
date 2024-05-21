import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//style
import {
    Title,
    PostContainer,
    InquiryForm,
    KeyText,
    InputBox,
    BodyTextarea,
    FileBox,
    Submit,
} from './style'

const AdminPost = () => {
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [postWriter, setPostWriter] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postPDF, setPostPDF] = useState(null);
    const [postJPG, setPostJPG] = useState(null);
    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.get('http://localhost:5000/verifyToken', {
                    withCredentials: true // 쿠키를 포함하여 요청
                });
                console.log(response.data);
            } catch (error) {
                console.error('Token verification failed:', error);
                navigate('/AdminLogin');
            }
        };

        verifyToken();
    }, []);


    //blob으로 변경
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const name = e.target.name;

        if (name === 'pdf') {
            setPostPDF(file);
        } else if (name === 'jpg') {
            setPostJPG(file);
        }
    };

    //서버로 전송 
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('title', postTitle);
        formData.append('writer', postWriter);
        formData.append('content', postContent);
        formData.append('jpg', postJPG);
        formData.append('pdf', postPDF);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };


    return (
        <>
            <PostContainer>
                <Title>
                    게시판 글 작성
                </Title>
                <InquiryForm>
                    <KeyText>
                        제목
                    </KeyText>
                    <InputBox
                        type="text"
                        name="user_name"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                </InquiryForm>
                <InquiryForm>
                    <KeyText>
                        작성자
                    </KeyText>
                    <InputBox
                        type="text"
                        name="user_name"
                        value={postWriter}
                        onChange={(e) => setPostWriter(e.target.value)}
                    />
                </InquiryForm>
                <InquiryForm>
                    <KeyText>
                        본문
                    </KeyText>
                    <BodyTextarea
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </InquiryForm>

                <InquiryForm>
                    <KeyText>
                        첨부파일
                    </KeyText>
                    <input
                        type="file"
                        name="pdf"
                        multiple
                        onChange={handleFileChange}
                    />
                </InquiryForm>

                <InquiryForm>
                    <KeyText>
                        썸네일 사진
                    </KeyText>
                    <input
                        type="file"
                        name="jpg"
                        multiple
                        onChange={handleFileChange}
                    />
                </InquiryForm>
                <Submit onClick={handleFileUpload}> 
                    업로드
                </Submit>

            </PostContainer>
        </>
    );
};

export default AdminPost;
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
    const [postTitle, SetPostTitle] = useState('');
    const [postWriter, SetPostWriter] = useState('');
    const [postcontent, SetPostcontent] = useState('');

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
                    // value={nameValue}
                    // onChange={(e) => setNameValue(e.target.value)}
                    />
                </InquiryForm>
                <InquiryForm>
                    <KeyText>
                        작성자
                    </KeyText>
                    <InputBox
                        type="text"
                        name="user_name"
                    // value={nameValue}
                    // onChange={(e) => setNameValue(e.target.value)}
                    />
                </InquiryForm>
                <InquiryForm>
                    <KeyText>
                        본문
                    </KeyText>
                    <BodyTextarea
                    // value={bodyText}
                    // onChange={(e) => setBodyText(e.target.value)}
                    />
                </InquiryForm>

                <InquiryForm>
                    <KeyText>
                        첨부파일
                    </KeyText>
                    <input
                        className='file-input'
                        type="file"
                        mulitple
                    //onChange={handleFileChange}
                    />
                </InquiryForm>

                <InquiryForm>
                    <KeyText>
                        썸네일 사진
                    </KeyText>
                    <input
                        className='file-input'
                        type="file"
                        mulitple
                    //onChange={handleFileChange}
                    />
                </InquiryForm>
                <Submit>
                    업로드
                </Submit>

            </PostContainer>
        </>
    );
};

export default AdminPost;
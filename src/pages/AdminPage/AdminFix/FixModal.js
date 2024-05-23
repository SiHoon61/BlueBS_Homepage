import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from "styled-components";
import axios from 'axios';
//img
import close from '../../../assets/Business/close.svg'

//style
import {
    Modal,
    Content,
    CloseButton,
    Date,
    ExistImg,
    Title,
    PostContainer,
    InquiryForm,
    KeyText,
    InputBox,
    BodyTextarea,
    Submit,
    ExistFile,
} from './modalStyle';

const FixModal = ({ show, onClose, content }) => {
    const [postTitle, setPostTitle] = useState('');
    const [postWriter, setPostWriter] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postPDF, setPostPDF] = useState(null);
    const [postPDFName, setPostPDFName] = useState('');
    const [postJPG, setPostJPG] = useState(null);
    const jpgInputRef = useRef(null);
    const pdfInputRef = useRef(null);

    useEffect(() => {
        const handleFetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/reference?id=${content[0]}`);
                console.log(response.data.current);
                setPostTitle(response.data.current.title);
                setPostWriter(response.data.current.writer);
                setPostContent(response.data.current.content);
                setPostPDFName(response.data.current.pdfName);
            } catch (err) {
                setPostTitle(null);
                console.error('Error fetching post:', err);
            }
        };
        handleFetchPost();

    }, [content[0]]);

    //blob으로 변경
    const handleFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const name = e.target.name;
        console.log(e.target.value);
        if (e.target.files.length > 0) {
            if (name === 'pdf') {
                setPostPDF(file);
                setPostPDFName(e.target.files[0].name);
            } else if (name === 'jpg') {
                setPostJPG(file);
            }
        }
    };

    //서버로 전송 
    const handleFileUpload = async () => {
        // const formData = new FormData();
        // formData.append('title', postTitle);
        // formData.append('writer', postWriter);
        // formData.append('content', postContent);
        // formData.append('date', formattedDate);
        // formData.append('jpg', postJPG);
        // formData.append('pdf', postPDF);
        // formData.append('pdfName', postPDFName);
        // setPostTitle('');
        // setPostWriter('');
        // setPostContent('');
        // setPostJPG(null);
        // setPostPDFName('');
        // setPostPDF(null);
        // setJpgPath('');
        // if (jpgInputRef.current && pdfInputRef.current) {
        //     jpgInputRef.current.value = '';
        //     pdfInputRef.current.value = '';
        // }
        // try {
        //     const response = await axios.post('http://localhost:5000/upload', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });
        //     alert('업로드 완료')
        // } catch (error) {
        //     console.error('Error uploading file:', error);
        // }
    };

    //모달 관련 ref
    const contentRef = useRef(null);
    const handleClickOutside = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            onClose(); // 클릭된 영역이 Content 밖이라면 모달 닫기 함수 호출
        }
    };
    return (
        <>
            <Modal onClick={handleClickOutside} $show={show}>
                <Content ref={contentRef} $show={show}>
                    <PostContainer>
                        <Title>
                            게시글 수정, id = {content[0]}
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
                                첨부파일(PDF)
                            </KeyText>
                            <input
                                type="file"
                                name="pdf"
                                multiple
                                ref={jpgInputRef}
                                onChange={handleFileChange}
                            />
                            <ExistFile>
                                [기존 파일]: {postPDFName ? postPDFName : '없음'}
                            </ExistFile>
                        </InquiryForm>
                        <InquiryForm>
                            <KeyText>
                                썸네일 사진
                            </KeyText>
                            <input
                                type="file"
                                name="jpg"
                                multiple
                                ref={pdfInputRef}
                                onChange={(e) => handleFileChange(e)}
                            />
                            <ExistFile>
                                [기존 사진] <ExistImg src={`data:image/jpeg;base64,${content[1]}`}
                                    alt="dataimg" />
                            </ExistFile>
                        </InquiryForm>
                        <Submit onClick={handleFileUpload}>
                            업로드
                        </Submit>
                    </PostContainer>

                    <CloseButton
                        src={close}
                        alt="close"
                        onClick={onClose}
                    />
                </Content>
            </Modal>
        </>
    );
};

export default FixModal;
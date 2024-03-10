import React from 'react';

import { Modal, Content } from './style'

const MyModal = ({ onClose }) => {
    return (
        <Modal>
            <Content>
                <h3>이것은 모달</h3>
                <p>궁시렁 궁시렁 내용입니다.</p>
                <button onClick={onClose}>닫기</button>
            </Content>
        </Modal>
    );
};

export default MyModal;
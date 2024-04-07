import React, { useState, useEffect, useRef } from 'react';

import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    BodyText,
    SmallText,
    RedText,
    InquiryContainer,
    InquiryForm,
    KeyText,
    Classify,
    ClassifyBox,
    ClassifyOption,
    Triangle,
    InputBox,
    InputDomain,
    SelectDomain,
    DomainBox,
    DomainOption
} from './style';

// import { SubColumnContainer } from './../../../components/Body/bodyStyle';
    
import ClassifyDropdown from './ClassifyDropdown';

const Inquiry = () => {
    const dropdownRef = useRef(null);
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [domain, setDomain] = useState('');
    const [visibleDomain, setVisibleDomain] = useState(false);
    const [isSelectDomain, setIsSelectDomain] = useState(0);
    const domainList = ['직접입력', 'gmail.com', 'naver.com', 'daum.net', 'nate.com', 'hanmail.net', 'hotmail.com']
    
    useEffect(() => {
        // 이벤트 리스너 설정: 바깥쪽 클릭 감지
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setVisibleDomain(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const domainToggleDropdown = () => {
        setVisibleDomain(!visibleDomain);
    };
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Communication · 1:1 문의하기
                    <TitleMainText>
                        1:1 문의하기
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <BodyText>
                        BlueBS에 궁금한 사항이 있으신가요?<br/>
                        문의하실 내용이나 개선 의견을 남겨 주세요. 빠른 시일 내에 성심성의껏 답변 드리겠습니다.
                        <SmallText>
                            <RedText>*</RedText>표시 항목은 필수입력사항입니다.
                        </SmallText>
                    </BodyText>
                </SubColumnContainer>
                <InquiryContainer>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>문의 분류
                        </KeyText>
                        <ClassifyDropdown/>
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>성명
                        </KeyText>
                        <InputBox
                            type="text"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} />
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>이메일
                        </KeyText>
                        <InputBox
                            type="text"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)} /> 
                        @
                        <InputDomain
                            type="text"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            placeholder={'직접 입력하기'}
                        /> 
                        <SelectDomain
                            onClick={domainToggleDropdown}
                            ref={dropdownRef}
                        >
                            {domainList[isSelectDomain]}
                            <Triangle $isClick={visibleDomain} />
                            <DomainBox $isClick={visibleDomain}>
                                {domainList.map((list, index) => (
                                    <DomainOption onClick={() => {
                                        setIsSelectDomain(index);
                                        const selectedDomain = index === 0 ? '' : domainList[index];
                                        setDomain(selectedDomain);
                                        }}>
                                        {list}
                                    </DomainOption>
                                ))}
                            </DomainBox>
                        </SelectDomain>
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>연락처
                        </KeyText>
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>내용
                        </KeyText>
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>약관 동의
                        </KeyText>
                    </InquiryForm>
                </InquiryContainer>
            </MainContainer>
        </>
    );
};

export default Inquiry;
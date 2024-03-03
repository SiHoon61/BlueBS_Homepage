import React from 'react';

import {
    TitleBar,
    TitleTextBox,
    TitleSubText,
    TitleMainText,
} from './style'
    
const Filter = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Technology · 마이크로 여과 필터(MSF)
                    <TitleSubText>
                        무약품 세정
                    </TitleSubText>
                    <TitleMainText>
                        마이크로 여과 필터(MSF)
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
        </>
    );
};

export default Filter;
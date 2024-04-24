import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

//img
import close from '../../assets/Business/whiteClose.png'
import whitePlus from '../../assets/Home/whitePlus.svg'
import backgroundIMG from '../../assets/Home/menuBackground.png'


const MenuContainer = styled.div`
    background-image: url(${backgroundIMG});
    background-blend-mode: multiply;
    background-color: rgba(36, 36, 36, 0.25);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: ${props => props.$isOpen ? 1 : 0};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: opacity 0.3s, visibility 0.3s;
`

const CloseButton = styled.img`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    @media (max-width: 600px){
        width: 50px;
        height: 50px;
        top: 17px;
        right: 10px;
    }
`

const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 30px 0 60px;
    padding-top: 50px;
    @media (max-width: 1000px){
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: nowrap;
        margin: 0 6%;
    }
`

const MenuBox = styled.div`
    margin: 30px 60px 10px 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    @media (max-width: 1000px){
        margin: 10px 30px;
    }
`
const MenuTitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const MenuTitle = styled.div`
    font-size: 24px;
    font-family: var(--font-sansMedium);
    @media (max-width: 1000px){
        font-size: 20px;
    }
`

const PlusButton = styled.div`
    width: 25px;
    height: 25px;
    margin-left: 15px;
    margin-top: 5px;
    background: url(${whitePlus}) no-repeat center; 
    background-size: contain;
    transition: transform 0.3s ease;
    transform: ${props => props.$isactive ? 'rotate(45deg)' : 'rotate(0)'};

`;


const MenuUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0px;
    @media (max-width: 1000px){
         align-items: flex-start;
        overflow: hidden; 
        transition: max-height 0.5s ease-out, opacity 0.5s ease, visibility 0.5s;
        max-height: ${props => props.$activeMenu ? "400px" : "0px"}; 
        opacity: ${props => props.$activeMenu ? 1 : 0};
        visibility: ${props => props.$activeMenu ? "visible" : "hidden"};
    }
`

const MenuLi = styled.li`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: var(--font-sansMedium);
    cursor: pointer;
    @media (max-width: 1000px){
        font-size: 16px;
    }
`


const MenuModal = ({ isOpen, onClose }) => {
    const [activeMenu, setActiveMenu] = useState(null); // 활성화된 메뉴의 ID 상태
    const toggleMenu = (menuId) => {
        if (activeMenu === menuId) {
            // 이미 활성화된 메뉴를 다시 클릭하면 모든 메뉴를 닫음
            setActiveMenu(null);
        } else {
            // 다른 메뉴 클릭 시 해당 메뉴를 활성화
            setActiveMenu(menuId);
        }
    };

    //navigation
    const navigate = useNavigate();
    const goCeoGreeting = () => {
        navigate("/greeting");
    }
    const goHistory = () => {
        navigate("/history");
    }
    const goAwards = () => {
        navigate("/awards");
    }
    const goLaboratory = () => {
        navigate("/laboratory");
    }
    const goElectroCatalyst = () => {
        navigate("/electroCatalyst");
    }
    const goTower = () => {
        navigate("/tower");
    }
    const goFilter = () => {
        navigate("/filter");
    }
    const goNanoBubble = () => {
        navigate("/nanoBubble");
    }
    const goPurify = () => {
        navigate("/purify");
    }
    const goSewer = () => {
        navigate("/sewer");
    }
    const goAgriculture = () => {
        navigate("/agriculture");
    }
    const goAnimalHusbandry = () => {
        navigate("/animalHusbandry");
    }
    const goGreenAlgae = () => {
        navigate("/greenAlgae");
    }
    const goLeachate = () => {
        navigate("/leachate");
    }
    const goMonitoring = () => {
        navigate("/monitoring");
    }
    const goDrinkingPD = () => {
        navigate("/drinkingPD");
    }
    const goSewerPD = () => {
        navigate("/sewerPD");
    }
    const goAgriculturePD = () => {
        navigate("/agriculturePD");
    }
    const goAnimalHusbandryPD = () => {
        navigate("/animalHusbandryPD");
    }
    const goGreenAlgaePD = () => {
        navigate("/greenAlgaePD");
    }
    const goLeachatePD = () => {
        navigate("/leachatePD");
    }
    const goAIWaterSystemPD = () => {
        navigate("/aIWaterSystemPD");
    }
    const goNewsRoom = () => {
        navigate("/newsRoom");
    }

    const goMap = () => {
        navigate("/map");
    }
    const goInquiry = () => {
        navigate("/inquiry");
    }
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <MenuContainer $isOpen={isOpen}>
            <CloseButton
                src={close}
                alt="close"
                onClick={onClose}
            />
            <MainContainer>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Company')}>
                        <MenuTitle>Company</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Company"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Company"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goCeoGreeting();
                        }
                        }>
                            CEO인사말
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goHistory();
                        }
                        }>
                            연혁
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAwards();
                        }
                        }>
                            인증 및 수상
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goLaboratory();
                        }
                        }>
                            기업부설연구소
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Technology')}>
                        <MenuTitle>Technology</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Technology"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Technology"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goElectroCatalyst();
                        }
                        }>
                            전기촉매필터
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goTower();
                        }
                        }>
                            전기촉매타워
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goFilter();
                        }
                        }>
                            마이크로 여과필터
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goNanoBubble();
                        }
                        }>
                            울트라 나노버블
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Business')}>
                        <MenuTitle>Business</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Business"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Business"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goPurify();
                        }
                        }>
                            정수 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goSewer();
                        }
                        }>
                            하 · 폐수 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAgriculture();
                        }
                        }>
                            농업 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAnimalHusbandry();
                        }
                        }>
                            축산 & 폐수 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goGreenAlgae();
                        }
                        }>
                            녹조 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goLeachate();
                        }
                        }>
                            침출수 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goMonitoring();
                        }
                        }>
                            운영관리 분야
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Products')}>
                        <MenuTitle>Products</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Products"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Products"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goDrinkingPD();
                        }
                        }>
                            음용수/생활용수/담수화
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goSewerPD();
                        }
                        }>
                            하/폐수 재이용 시스템
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAgriculturePD();
                        }
                        }>
                            농업용수 FDA/MSF 여과기
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAnimalHusbandryPD();
                        }
                        }>
                            축산분뇨/악취 저감
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goGreenAlgaePD();
                        }
                        }>
                            녹조/저수지 복원 및 유지
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goLeachatePD();
                        }
                        }>
                            고농도 침출수 처리
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAIWaterSystemPD();
                        }
                        }>
                            AI 스마트 물 관리 시스템
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Communication')}>
                        <MenuTitle>Communication</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Communication"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Communication"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goInquiry();
                        }
                        }>
                            1:1 문의하기
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goNewsRoom();
                        }
                        }>
                            홍보자료실
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goMap();
                        }
                        }>
                            오시는길
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
            </MainContainer>
        </MenuContainer>
    );
};

export default MenuModal;
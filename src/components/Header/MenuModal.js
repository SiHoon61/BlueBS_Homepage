import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

//img
import close from '../../assets/Business/whiteClose.svg'
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
    top: 10px;
    right: 20px;
    cursor: pointer;
`

const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 30px 0 60px;;
`

const MenuBox = styled.div`
    margin: 30px 60px 10px 60px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    color: white;
`

const MenuTitle = styled.div`
    font-size: 24px;
    font-family: var(--font-sansMedium);
`

const MenuUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0px;
`

const MenuLi = styled.li`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: var(--font-sansMedium);
    cursor: pointer;
`

const MenuModal = ({ isOpen, onClose }) => {
    //navigation
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }
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
                    <MenuTitle>
                        Company
                    </MenuTitle>
                    <MenuUl>
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
                    <MenuTitle>
                        Technology
                    </MenuTitle>
                    <MenuUl>
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
                    <MenuTitle>
                        Communication
                    </MenuTitle>
                    <MenuUl>
                        <MenuLi onClick={() => {
                            onClose();
                            goNewsRoom();
                        }
                        }>
                            뉴스룸
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
                <MenuBox>
                    <MenuTitle>
                        Business
                    </MenuTitle>
                    <MenuUl>
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
                    <MenuTitle>
                        Products
                    </MenuTitle>
                    <MenuUl>
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
                            인공지능 스마트 물 관리 시스템
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
                
            </MainContainer>
        </MenuContainer>
    );
};

export default MenuModal;
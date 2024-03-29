import React from 'react';

//pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Bottom from './components/Bottom/Bottom';
import Home from './pages/Home/Home';
import Greeting from './pages/Company/Greeting/Greeting';
import History from './pages/Company/History/History';
import Awards from './pages/Company/Awards/Awards';
import Laboratory from './pages/Company/Laboratory/Laboratory';
import ElectroCatalyst from './pages/Technology/ElectroCatalyst/ElectroCatalyst';
import Tower from './pages/Technology/Tower/Tower';
import Filter from './pages/Technology/Filter/Filter';
import NanoBubble from './pages/Technology/NanoBubble/NanoBubble';
import Purify from './pages/Business/Purify/Purify';
import Sewer from './pages/Business/Sewer/Sewer'
import Agriculture from './pages/Business/Agriculture/Agriculture';
import AnimalHusbandry from './pages/Business/AnimalHusbandry/AnimalHusbandry';
import GreenAlgae from './pages/Business/GreenAlgae/GreenAlgae';
import Leachate from './pages/Business/Leachate/Leachate';
import Monitoring from './pages/Business/Monitoring/Monitoring';
import DrinkingPD from './pages/Products/Drinking/Drinking';
import SewerPD from './pages/Products/Sewer/Sewer';
import AgriculturePD from './pages/Products/Agriculture/Agriculture';
import AnimalHusbandryPD from './pages/Products/AnimalHusbandry/AnimalHusbandry';
import GreenAlgaePD from './pages/Products/GreenAlgae/GreenAlgae';
import LeachatePD from './pages/Products/Leachate/Leachate';
import AIWaterSystemPD from './pages/Products/AIWaterSystem/AIWaterSystem';
import NewsRoom from './pages/Communication/NewsRoom/NewsRoom';
import MapWay from './pages/Communication/MapWay/MapWay';
import ScrollToTop from './Util/ScrollToTop'
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/greeting" element={<Greeting />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/awards" element={<Awards />}></Route>
          <Route path="/laboratory" element={<Laboratory />}></Route>
          <Route path="/electroCatalyst" element={<ElectroCatalyst />}></Route>
          <Route path="/tower" element={<Tower />}></Route>
          <Route path="/filter" element={<Filter />}></Route>
          <Route path="/nanoBubble" element={<NanoBubble />}></Route>
          <Route path="/purify" element={<Purify />}></Route>
          <Route path="/sewer" element={<Sewer />}></Route>
          <Route path="/agriculture" element={<Agriculture />}></Route>
          <Route path="/animalHusbandry" element={<AnimalHusbandry />}></Route>
          <Route path="/greenAlgae" element={<GreenAlgae />}></Route>
          <Route path="/leachate" element={<Leachate />}></Route>
          <Route path="/monitoring" element={<Monitoring />}></Route>
          <Route path="/drinkingPD" element={<DrinkingPD />}></Route>
          <Route path="/sewerPD" element={<SewerPD />}></Route>
          <Route path="/agriculturePD" element={<AgriculturePD />}></Route>
          <Route path="/animalHusbandryPD" element={<AnimalHusbandryPD />}></Route>
          <Route path="/greenAlgaePD" element={<GreenAlgaePD />}></Route>
          <Route path="/leachatePD" element={<LeachatePD />}></Route>
          <Route path="/aIWaterSystemPD" element={<AIWaterSystemPD />}></Route>
          <Route path="/map" element={<MapWay />}></Route>
          <Route path="/newsRoom" element={<NewsRoom />}></Route>
        </Routes>
        <Bottom></Bottom>
      </Router>
    </>
  );
}

export default App;

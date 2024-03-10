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
import MapWay from './pages/Communication/MapWay/MapWay';


import ScrollToTop from './Util/ScrollToTop'
function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
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
          <Route path="/map" element={<MapWay />}></Route>
        </Routes>
        <Bottom></Bottom>
      </Router>
    </>
  );
}

export default App;

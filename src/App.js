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
import Inquiry from './pages/Communication/Inquiry/Inquiry';
import ReferenceRoom from './pages/Communication/ReferenceRoom/ReferenceRoom';
import AdminPage from './pages/AdminPage/AdminPage';
import ScrollToTop from './Util/ScrollToTop'

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
    <Bottom />
  </>
);

const AdminLayout = ({ children }) => (
  <>
    <div>{children}</div>
  </>
);

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>}></Route>
          <Route path="/greeting" element={<DefaultLayout><Greeting /></DefaultLayout>}></Route>
          <Route path="/history" element={<DefaultLayout><History /></DefaultLayout>}></Route>
          <Route path="/awards" element={<DefaultLayout><Awards /></DefaultLayout>}></Route>
          <Route path="/laboratory" element={<DefaultLayout><Laboratory /></DefaultLayout>}></Route>
          <Route path="/electroCatalyst" element={<DefaultLayout><ElectroCatalyst /></DefaultLayout>}></Route>
          <Route path="/tower" element={<DefaultLayout><Tower /></DefaultLayout>}></Route>
          <Route path="/filter" element={<DefaultLayout><Filter /></DefaultLayout>}></Route>
          <Route path="/nanoBubble" element={<DefaultLayout><NanoBubble /></DefaultLayout>}></Route>
          <Route path="/purify" element={<DefaultLayout><Purify /></DefaultLayout>}></Route>
          <Route path="/sewer" element={<DefaultLayout><Sewer /></DefaultLayout>}></Route>
          <Route path="/agriculture" element={<DefaultLayout><Agriculture /></DefaultLayout>}></Route>
          <Route path="/animalHusbandry" element={<DefaultLayout><AnimalHusbandry /></DefaultLayout>}></Route>
          <Route path="/greenAlgae" element={<DefaultLayout><GreenAlgae /></DefaultLayout>}></Route>
          <Route path="/leachate" element={<DefaultLayout><Leachate /></DefaultLayout>}></Route>
          <Route path="/monitoring" element={<DefaultLayout><Monitoring /></DefaultLayout>}></Route>
          <Route path="/drinkingPD" element={<DefaultLayout><DrinkingPD /></DefaultLayout>}></Route>
          <Route path="/sewerPD" element={<DefaultLayout><SewerPD /></DefaultLayout>}></Route>
          <Route path="/agriculturePD" element={<DefaultLayout><AgriculturePD /></DefaultLayout>}></Route>
          <Route path="/animalHusbandryPD" element={<DefaultLayout><AnimalHusbandryPD /></DefaultLayout>}></Route>
          <Route path="/greenAlgaePD" element={<DefaultLayout><GreenAlgaePD /></DefaultLayout>}></Route>
          <Route path="/leachatePD" element={<DefaultLayout><LeachatePD /></DefaultLayout>}></Route>
          <Route path="/aIWaterSystemPD" element={<DefaultLayout><AIWaterSystemPD /></DefaultLayout>}></Route>
          <Route path="/map" element={<DefaultLayout><MapWay /></DefaultLayout>}></Route>
          <Route path="/newsRoom" element={<DefaultLayout><NewsRoom /></DefaultLayout>}></Route>
          <Route path="/inquiry" element={<DefaultLayout><Inquiry /></DefaultLayout>}></Route>
          <Route path="/referenceRoom" element={<DefaultLayout><ReferenceRoom /></DefaultLayout>}></Route>
          <Route path="/adminPage" element={<AdminLayout><AdminPage /></AdminLayout>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

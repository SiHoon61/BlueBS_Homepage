import React from 'react';

//pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Bottom from './components/Bottom/Bottom';
import Home from './pages/Home/Home';
import Greeting from './pages/Company/Greeting/Greeting';
import History from './pages/Company/History/History';
import Awards from './pages/Company/Awards/Awards';
import ElectroCatalyst from './pages/Technology/ElectroCatalyst/ElectroCatalyst';
import Filter from './pages/Technology/Filter/Filter';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/greeting" element={<Greeting />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/awards" element={<Awards />}></Route>
          <Route path="/electroCatalyst" element={<ElectroCatalyst />}></Route>
          <Route path="/filter" element={<Filter />}></Route>
        </Routes>
        <Bottom></Bottom>
      </Router>
    </>
  );
}

export default App;

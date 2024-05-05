import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Blog, Features, Footer, Header, WhatTRANSFORMER } from './containers';
import { CTA, Brand, Navbar } from './components';
import TermsConditions from "./pages/termsConditions.jsx";
import PrivacyPolicy from './pages/privacyPolicy.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div className="gradient__bg">
              <Navbar />
              <Header />
            </div>

            <Brand />
            <WhatTRANSFORMER />
            <Features />
            {/* <Possibility/> */}
            <CTA />
            <Blog />
            <Footer />
          </div>
        } />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

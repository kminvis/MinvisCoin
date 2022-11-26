import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BTC from './components/information/BTC'
import ETH from './components/information/ETH'
import XRP from './components/information/XRP'
import DOGE from './components/information/DOGE'
import Main from './components/main/main'
import Header from './components/global/header'
import Footer from './components/global/footer'
import Signin from './components/sign/signin'
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/BTC" element={<BTC />}></Route>
            <Route path="/ETH" element={<ETH />}></Route>
            <Route path="/XRP" element={<XRP />}></Route>
            <Route path="/DOGE" element={<DOGE />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

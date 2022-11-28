import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Python from './components/information/Python'
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
            <Route path="/python" element={<Python />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

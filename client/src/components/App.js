import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LandingPage.js";
import Footer from "./views/Footer/Footer"
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import ChatPage from "./views/ChatPage/ChatPage"
import Auth from "../hoc/auth";


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div className="content_wrapper" style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" element={<Auth reload={null}>{LandingPage}</Auth>} />
          <Route path="/chat" element={<Auth reload={null}>{ChatPage}</Auth> } />
          <Route path="/register" element={<Auth reload={false}>{RegisterPage}</Auth> } />
          <Route path="/login" element={<Auth reload={false}>{LoginPage}</Auth> } />

        </Routes>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
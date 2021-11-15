import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LandingPage.js";
import Footer from "./views/Footer/Footer"


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />

      <div className="content_wrapper" style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" component={LandingPage} />
        </Routes>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div className="content_wrapper" style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
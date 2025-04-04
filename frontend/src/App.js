import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '6rem', padding: '2rem', flex: 1 }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

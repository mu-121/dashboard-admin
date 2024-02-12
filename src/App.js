import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBars';
import Dashboard from './components/DashboardPage';
import Store from './components/TablePage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

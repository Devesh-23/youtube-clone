import React from 'react';
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
     <Router>
      <div className="container my-3">
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/Search/:searchterm" element={<SearchPage/>} />
      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;

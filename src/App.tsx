import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { InputPage } from './components/InputPage';
import { ReportPage } from './components/ReportPage';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={HomePage} />
          <Route path='/input' element={InputPage} />
          <Route path='/report' pellement={ReportPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

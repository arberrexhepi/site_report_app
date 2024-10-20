import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/common/Header';
import { InputPage } from './components/InputPage';
import { ReportPage } from './components/ReportPage';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/input' element={<InputPage />} />
            <Route path='/report' selement={LoaderPage } />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

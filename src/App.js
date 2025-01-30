import React from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <PageWrapper>
      <Router>
        <Routes>
          <Route 
          path="/home"
          component={Home}
        />
        </Routes>
      </Router>
    </PageWrapper>
  );
}

export default App;

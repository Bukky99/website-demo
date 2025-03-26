import React from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';


function App() {
  return (
    <Router>
      <PageWrapper>
          <Routes>
            <Route 
              exact={true}
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
            path="/contact"
            element={<Contact />}
            />

          </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;

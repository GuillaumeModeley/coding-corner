import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components (we'll create these next)
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import pages (we'll create these next)
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <Navigation />
        <Container as="main" className="flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
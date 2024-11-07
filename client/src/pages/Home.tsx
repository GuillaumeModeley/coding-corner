import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">© {new Date().getFullYear()} Coding Corner</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-muted">
                GitHub
              </a>
            </li>
            <li className="ms-3">
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="text-muted">
                LinkedIn
              </a>
            </li>
            <li className="ms-3">
              <a href="mailto:your.email@example.com" className="text-muted">
                Email
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
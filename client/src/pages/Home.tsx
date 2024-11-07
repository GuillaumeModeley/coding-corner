import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <h1 className="display-4 fw-bold">Welcome to Coding Corner</h1>
          <p className="lead">
            A place where code meets creativity. Explore my projects, read my blog posts, 
            and learn more about my journey in software development.
          </p>
        </Col>
        <Col md={6}>
          <div className="p-4 bg-light rounded">
            <h3>Latest Updates</h3>
            <ul className="list-unstyled">
              <li className="mb-2">🚀 Working on exciting new projects</li>
              <li className="mb-2">📚 Learning new technologies</li>
              <li className="mb-2">✍️ Writing technical blog posts</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
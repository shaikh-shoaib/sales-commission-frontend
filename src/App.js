import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Home from './components/Home';
import GetSales from './components/GetSales';
import PostSales from './components/PostSales';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={3}> <Menu /> </Col>
            <Col md={9}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-sales" element={<PostSales />} exact />
                <Route path="/view-sales" element={<GetSales />} exact />
                <Route path="/about" element={<About />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;

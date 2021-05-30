import React from 'react';
import './App.css';
//import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  
//  const btnhandle = () => {
//    toast.success ("my first message", {position: 'top-center'});
//  };
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
          
            <Col md={8}>
              <Route path='/' component={Home} exact />
              <Route path='/add-course' component={AddCourse} exact />
              <Route path='/view-courses' component={AllCourses} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import StudentList from './components/StudentList';
import StudentModal from './components/StudentModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <StudentModal />
            <StudentList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
import React, { Component } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import logo from '../logo.svg';
import List from './List'
import './App.css';
import ArticleForm from './ArticleForm';

/* class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
} */

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Redux + React</h1>
            </header>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={6} mdPull={6}>
            <h2>Articles</h2>
            <List />
          </Col>
          <Col md={6} mdPush={6}>
            <h2>Add Articles</h2>
            <ArticleForm />
          </Col>
        </Row>
      </Grid>
      // <div>
      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <h1 className="App-title">Redux + React</h1>
      //     </header>
      //     {/* <p className="App-intro">
      //       To get started, edit <code>src/App.js</code> and save to reload.
      //     </p> */}
      //   </div>
      //   <div className="row mt-5">
      //     <div className="col-md-4 offset-md-1">
      //       <h2>Articles</h2>
      //       <List />
      //     </div>
      //     <div className="col-md-4 offset-md-1">
      //       <h2>Add Articles</h2>
      //       <ArticleForm />
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default App;

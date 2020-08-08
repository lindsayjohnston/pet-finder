import React, { Component } from 'react';
import classes from './App.css';
import Navbar from './Navbar/Navbar';
import ClickHandler from './Navbar/clickHandler';
import Animal from './Animal/Animal';


class App extends Component {


  render() {
    return (
      <div className="App">
        
          <Navbar
            click={(event) => ClickHandler(event)}
          />
          <section className={classes.main}>
            <Animal></Animal>

          </section>
          

      </div>
    );
  }
}

export default App;

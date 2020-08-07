import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import ClickHandler from './Navbar/clickHandler';


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Navbar 
          click={(event) => ClickHandler(event)}
        />
      </div>
    );
  }
}

export default App;

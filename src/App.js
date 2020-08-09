import React, { Component } from 'react';
import classes from './App.css';
import Navbar from './Navbar/Navbar';
// import clickHandler from './Navbar/clickHandler';
import Animal from './Animal/Animal';
import animalsObject from './Animal/Animals-object';


class App extends Component {
  state = {
    animals: animalsObject,
    showing: 'animals',
    userFaves: []
  }

  addFaveAnimalHandler = (id) => {
    const newAnimals = [...this.state.animals];
    const newFaves = [...this.state.userFaves];
    let checkFaves;

    if(newFaves.length >0){
      checkFaves = newFaves.filter(animal => {
        return animal.id === id;
      });
    };
    
    
    if (checkFaves === undefined) {
      const fave = newAnimals.find(animal => {
        return animal.id === id;
      });
      newFaves.push(fave);
      this.setState({ userFaves: newFaves });
    }
  }

  filterAnimalsHandler = (event) => {
    console.log(event.target)
  }

  clickHandler = (event) => {
    console.log(event.target);
    if (event.target.id === 'dogs') {
      const animals = [...animalsObject];
      //CHANGE SHOW ANIMALS
      const showAnimals = animals.filter(animal => animal.type === 'dog');
      this.setState({ animals: showAnimals, showing: 'dogs' });
    }
    if (event.target.id === 'cats') {
      const animals = [...animalsObject];
      //CHANGE SHOW ANIMALS
      const showAnimals = animals.filter(animal => animal.type === 'cat');
      this.setState({ animals: showAnimals, showing: 'cats' });
    }
    if (event.target.id === 'faves') {
      this.setState({ showing: 'of your favorite animals' })
    } if (event.target.id === 'search-icon') {
      alert('search!');
    } if (event.target.id === 'paw') {
      this.setState({ animals: animalsObject, showing: 'animals' });
    }
  };

  render() {
    let animals = (
      <div className={classes.main}>
        {this.state.animals.map((animal, index) => {
          return <Animal
            name={animal.name}
            age={animal.age}
            breed={animal.breed}
            milesAway={animal.milesAway}
            key={animal.id}
            photo={animal.photo}
            click={() => this.addFaveAnimalHandler(animal.id)}
          />
        })}
      </div>
    );

    return (
      <div className="App">

        <Navbar
          totalAnimals={this.state.animals.length}
          click={(event) => this.clickHandler(event)}
          showing={this.state.showing}
        />

        {animals}





      </div>
    );
  }
}

export default App;

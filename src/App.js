import React, { Component } from 'react';
import classes from './App.css';
import Navbar from './Navbar/Navbar';
import Animal from './Animal/Animal';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import feedback from './feedback-button.png';
import animalsObject from './Animal/Animals-object';




const showAnimals = [...animalsObject];
showAnimals.splice(0, 1);

class App extends Component {
  state = {
    animals: [...animalsObject],
    show: [...showAnimals],
    showing: 'animals',
    menuShowing: false
  }

  addFaveAnimalHandler = (clickedAnimal) => {
    if (clickedAnimal.id !== 'no-faves') {
      const newAnimals = [...this.state.animals];
      const newFaves = newAnimals.filter(animal => animal.fave === true);


      let clickedAnimalIndex = -1;
      //CASE 1: ANIMAL WILL BE DELETED FROM FAVES
      //CASE 2: ANIMAL WILL BE ADDED

      if (clickedAnimal.fave) {
        let tempAnimal = newAnimals.find((animal, index) => {
          clickedAnimalIndex = index;
          return animal.id === clickedAnimal.id;
        });
        newAnimals[clickedAnimalIndex].fave = false;

        tempAnimal = newFaves.find((animal, index) => {
          clickedAnimalIndex = index;
          return animal.id === clickedAnimal.id;
        });

        newFaves.splice(clickedAnimalIndex, 1);
        if (newFaves.length > 1) {
          newFaves.splice(0, 1); //get rid of default
        }

        if (this.state.showing === 'faves') {
          this.setState({ animals: newAnimals, show: newFaves });
        } else {
          this.setState({ animals: newAnimals });
        }

      } else {
        //find it in newAnimals
        let tempAnimal = newAnimals.find((animal, index) => {
          clickedAnimalIndex = index;
          return animal.id === clickedAnimal.id;
        });
        newAnimals[clickedAnimalIndex].fave = true;
        newFaves.push(clickedAnimal);
        if (this.state.showing === 'faves') {
          this.setState({ animals: newAnimals, show: newFaves });
        } else {
          this.setState({ animals: newAnimals });
        }
      }
    }
  }

  navBarClickHandler = (event) => {
    console.log(event.target);
    if (event.target.id === 'dogs') {
      const animals = [...this.state.animals];
      //CHANGE SHOW ANIMALS
      animals.splice(0, 1); //take away default
      const showAnimals = animals.filter(animal => animal.type === 'dog');
      this.setState({ show: showAnimals, showing: 'dogs', menuShowing: false });
    }
    if (event.target.id === 'cats') {
      const animals = [...this.state.animals];
      animals.splice(0, 1);
      const showAnimals = animals.filter(animal => animal.type === 'cat');
      this.setState({ show: showAnimals, showing: 'cats', menuShowing: false });
    }
    if (event.target.id === 'faves') {
      const animals = [...this.state.animals];
      const showAnimals = animals.filter(animal => animal.fave === true);
      if (showAnimals.length > 1) {
        showAnimals.splice(0, 1); //take away the default
      }
      this.setState({ show: showAnimals, showing: 'faves', menuShowing: false });
    } if (event.target.id === 'showAll') {
      const animals = [...this.state.animals];
      animals.splice(0, 1);
      this.setState({ show: animals, showing: 'animals', menuShowing: false });
    } if (event.target.id === 'showMenu') {
      this.setState({ menuShowing: true });
    }
  };

  menuClickHandler = (event) => {
    console.log(event.target);
    const fakeEvent = { target: { id: '' } };
    if (event.target.id === 'hideMenu') {
      this.setState({ menuShowing: false });
    } if (event.currentTarget.id === 'dogsMenu') {
      fakeEvent.target.id = 'dogs';
      this.navBarClickHandler(fakeEvent);
    } if (event.currentTarget.id === 'catsMenu') {
      fakeEvent.target.id = 'cats';
      this.navBarClickHandler(fakeEvent);
    } if (event.currentTarget.id === 'favesMenu') {
      fakeEvent.target.id = 'faves';
      this.navBarClickHandler(fakeEvent);
    } if (event.currentTarget.id === 'allMenu') {
      fakeEvent.target.id = 'showAll';
      this.navBarClickHandler(fakeEvent);
    }
  };

  render() {
    let animals = (
      <div className={classes.main}>
        {this.state.show.map((animal, index) => {
          return <Animal
            name={animal.name}
            age={animal.age}
            breed={animal.breed}
            milesAway={animal.milesAway}
            key={animal.id}
            photo={animal.photo}
            fave={animal.fave}
            click={() => this.addFaveAnimalHandler(animal)}
          />
        })}
      </div>
    );

    if (this.state.menuShowing === false) {
      return (
        <div className="App">
          <img className={classes.feedback} src={feedback} alt='feedback button'></img>
          <Navbar
            totalAnimals={this.state.show.length}
            click={(event) => this.navBarClickHandler(event)}
            showing={this.state.showing}
          />
          <div className={classes.animalsDiv}>
            {animals}
          </div>

          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">

          <Menu
            click={(event) => this.menuClickHandler(event)}
          />
        </div>
      );

    }

  }
}

export default App;

import React, { Component } from 'react';
import classes from './App.css';
import Navbar from './Navbar/Navbar';
import ClickHandler from './Navbar/clickHandler';
import Animal from './Animal/Animal';

//ANIMAL PHOTOS
import bullDog from './Images-animals/bullDog.jpeg';
import husky from './Images-animals/husky.jpeg';
import boyCat from './Images-animals/boyCat.jpg';
import kitten from './Images-animals/kitten.jpeg';
import muttPuppy from './Images-animals/muttPuppy.jpg';

class App extends Component {
  state= {
    animals: [
      {id:'adsf', name: 'Sparky', age: 'Puppy', breed: 'Bull dog', milesAway: 3, photo: bullDog },
      {id:'oerf', name: 'Luna', age: 'Adult', breed: 'Husky', milesAway: 2, photo: husky },
      {id: '39fj', name: 'Bill', age: 'Kitten', breed: 'Cat', milesAway: 13, photo: kitten},
      {id:'fjfjf', name: 'Farquat', age: 'Cat', breed: 'Cat', milesAway: 5, photo: boyCat },
      {id:'049d', name: 'Yummi', age: 'Puppy', breed: 'Mix', milesAway: 3, photo: muttPuppy }
    ]
  }

  

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
          />
        })}
      </div>
    );

    return (
      <div className="App">
        
          <Navbar
            click={(event) => ClickHandler(event)}
          />
        
            {animals}
            


          

      </div>
    );
  }
}

export default App;

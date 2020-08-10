import bullDog from './Images-animals/bullDog.jpeg';
import husky from './Images-animals/husky.jpeg';
import boyCat from './Images-animals/boyCat.jpg';
import kitten from './Images-animals/kitten.jpeg';
import muttPuppy from './Images-animals/muttPuppy.jpg';
import paw from '../Navbar/Images/paw-solid.svg';

let animals= [
    {id:'no-faves', name: `You haven't chosen any faves yet!`, photo: paw, fave: true},
    {id:'adsf', name: 'Sparky', age: 'Puppy', breed: 'Bull dog', milesAway: 3, photo: bullDog, type: 'dog', fave: false},
    {id:'oerf', name: 'Luna', age: 'Adult', breed: 'Husky', milesAway: 2, photo: husky, type: 'dog', fave: false },
    {id: '39fj', name: 'Bill', age: 'Kitten', breed: 'Cat', milesAway: 13, photo: kitten, type: 'cat', fave: false},
    {id:'fjfjf', name: 'Farquat', age: 'Adult', breed: 'Cat', milesAway: 5, photo: boyCat, type: 'cat', fave: false },
    {id:'049d', name: 'Yummi', age: 'Puppy', breed: 'Mix', milesAway: 3, photo: muttPuppy, type: 'dog', fave: false }
  ];

  export default animals;
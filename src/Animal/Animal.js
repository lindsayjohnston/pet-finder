import React from 'react';
import classes from './Animal.css';
import dog from './beach-dog.jpeg';

const animal = (props) => {
    return (
        <div className={classes.animalCard}>
            <img className={classes.animalPhoto} src={dog} alt='cute dog'></img>
            <div className={classes.petCardBody}>
                <div className={classes.petCardBodyDetails}>
                    <h3>Namey-Name</h3>
                    <div className={classes.description}>
                        <p id="animalAge">Puppy</p> 
                        <li id="breed">Bull dog</li>
                    </div>
                    <p id="milesAway">3 miles away</p>
                </div>
            </div>

        </div>
    )
};

export default animal;
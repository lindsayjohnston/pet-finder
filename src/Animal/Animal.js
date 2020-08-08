import React from 'react';
import classes from './Animal.css';


const animal = (props) => {
    return (
        <div className={classes.animalCard} onClick={props.click}>
            <img className={classes.animalPhoto}  alt='cute animal' src={props.photo}></img>
            <div className={classes.petCardBody}>
                <div className={classes.petCardBodyDetails}>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>
                        <p id="animalAge">{props.age}</p> 
                        <li id="breed">{props.breed}</li>
                    </div>
                    <p id="milesAway">{props.milesAway} miles away</p>
                </div>
            </div>

        </div>
    )
};

export default animal;
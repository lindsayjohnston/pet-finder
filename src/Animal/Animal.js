import React from 'react';
import classes from './Animal.css';


const animal = (props) => {
    return (
        <div className={classes.animalCard}>
            <img className={classes.animalPhoto} src={props.photo} alt='cute animal'></img>
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
import React from 'react';
import classes from './Animal.css';
import heartUnclicked from './heart-regular.svg';
import heartClicked from './heart-solid.svg';

const animal = (props) => {
    let heartIcon;
    if (!props.fave) {
        heartIcon = heartUnclicked;
    } else {
        heartIcon=heartClicked;
    }
    let petCardBodyDetails;
    if (props.name === 'You haven\'t chosen any faves yet!') {
        petCardBodyDetails =
            (<div className={classes.petCardBodyDetails}>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                    <p>Click on the heart icon on your favorite animal to save to your faves.</p>
                </div>

            </div>
            );
    } else {
        petCardBodyDetails = (
            <div className={classes.petCardBodyDetails}>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                    <p id="animalAge">{props.age}</p>
                    <li id="breed">{props.breed}</li>
                </div>
                <p id="milesAway">{props.milesAway} miles away</p>
            </div>
        );
    }
    return (
        <div className={classes.animalCard} >
            <img className={classes.animalPhoto} alt='cute animal' src={props.photo}></img>
            <div className={classes.circleDiv} onClick={props.click}>
                <img className={classes.heartIcon} alt='heart icon' src={heartIcon}></img>
            </div>

            <div className={classes.petCardBody}>
                {petCardBodyDetails}
            </div>

        </div>
    )
};

export default animal;
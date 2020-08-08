import React from 'react';
import classes from './Navbar.css';
import carrotDown from './Images/angle-down-solid.svg';
import searchIcon from './Images/search-solid.svg';
import paw from './Images/paw-solid-white.png';

const test= (props) =>{
    return(
        <div>DID IT WORK?</div>
    )
}


const navbar = (props) => {
    return (
        <div className={classes.header}>
            <section className={classes.topHeader}>
                <section className={classes.leftHeader}>
                    <h2 className={classes.petfinderLogo}>petfinder</h2>

                    <div className={classes.contentLinks}>
                        <div
                            onClick={props.click}
                            id='dogs'
                            className={classes.contentLink} href='dogs'>DOGS
                            <img className={classes.icon} src={carrotDown} alt='carrot-down'></img>
                        </div>
                        <div
                            onClick={props.click}
                            id='cats'
                            className={classes.contentLink}
                            href='cats'>CATS
                        <img className={classes.icon} src={carrotDown} alt='carrot-down'></img>
                        </div>
                        <div
                            onClick={props.click}
                            id='faves'
                            className={classes.contentLink}
                            href='faves'>FAVES
                        <img className={classes.icon} src={carrotDown} alt='carrot-down'></img>
                        </div>
                    </div>

                    <div className={classes.searchDiv}>
                        <input type='text' />
                        <img
                            id='search-icon'
                            onClick={props.click}
                            className={classes.icon}
                            src={searchIcon}
                            alt='search-icon'>
                        </img>
                    </div>
                </section>

                <section className={classes.signInLinks}>
                    <p onClick={props.click}>Sign Up</p>
                    <p onClick={props.click} >Log In</p>
                </section>


            </section>
            <section className={classes.bottomHeader}>
                <div className={classes.infoDiv}>
                        <img
                            id='paw' 
                            onClick={props.click}
                            className={classes.paw}
                            src={paw}
                            alt='paw'></img>

                    <p>15 animals near you!</p>
                </div>
                <div className={classes.saveSearchDiv}>
                    <button>SAVE SEARCH</button>
                </div>
            </section>
        </div>
    )
};

export default navbar;
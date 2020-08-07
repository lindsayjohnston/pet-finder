import React from 'react';
import classes from './Navbar.css';
import carrotDown from './Images/angle-down-solid.svg';



const navbar = (props) => {
    return (
        <div className={classes.header}>
            <section className={classes.contentLinks}>
                <h2 className={classes.petfinderLogo}>petfinder</h2>

                <a className={classes.contentLink} href='#'>DOGS <img className={classes.carrotDown} src={carrotDown}></img></a>
                <a className={classes.contentLink} href='#'>CATS <img className={classes.carrotDown} src={carrotDown}></img></a>
                <a className={classes.contentLink} href='#'>FAVES <img className={classes.carrotDown} src={carrotDown}></img></a>




            </section>

            <section className={classes.signInLinks}>
                <p>
                    <a href='#'>Log In</a>
                </p>
                <p>
                    <a href='#'>Sign Up</a>
                </p>
            </section>


        </div>
    )
};

export default navbar;
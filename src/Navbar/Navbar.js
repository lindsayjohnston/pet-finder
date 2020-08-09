import React from 'react';
import classes from './Navbar.css';
import carrotDown from './Images/angle-down-solid.svg';
import searchIcon from './Images/search-solid.svg';
import paw from './Images/paw-solid-white.png';
import dogIcon from './Images/dog-solid.svg';
import catIcon from './Images/cat-solid.svg';


const navbar = (props) => {
    let navBarBottom =
        (
            <section className={classes.bottomHeader}>
                <div className={classes.infoDiv}>
                    <div className={classes.nearYouDiv}>
                        <img
                            id='paw'
                            onClick={props.click}
                            className={classes.bigIcon}
                            src={paw}
                            alt='paw'></img>

                        <p>{props.totalAnimals} {props.showing} near you!</p>
                    </div>
                </div>
                <div className={classes.saveSearchDiv}>
                    <button>SAVE SEARCH</button>
                </div>
            </section>
        )

    if (props.showing === 'dogs') {
        navBarBottom = (
            <section className={classes.bottomHeader}>
                <div className={classes.infoDiv}>
                    <div className={classes.nearYouDiv}>
                        <img
                            className={classes.bigIcon}
                            src={dogIcon}
                            alt='paw'></img>
                        <p>{props.totalAnimals} {props.showing} near you!</p>

                    </div>
                    <div className={classes.options}>

                        <div>
                            <input type='radio' id='small' name='type'></input>
                            <label htmlFor='small'>Small</label>
                        </div>
                        <div>
                            <input type='radio' id='medium' name='type'></input>
                            <label htmlFor='medium'>Medium</label>
                        </div>

                        <div>
                            <input type='radio' id='large' name='type'></input>
                            <label htmlFor='large'>Large</label>
                        </div>

                    </div>

                </div>
                <div className={classes.saveSearchDiv}>
                    <button>SAVE SEARCH</button>
                </div>
            </section>
        )
    }
    if (props.showing === 'cats') {
        navBarBottom = (
            <section className={classes.bottomHeader}>
                <div className={classes.infoDiv}>
                    <div className={classes.nearYouDiv}>
                        <img
                            className={classes.bigIcon}
                            src={catIcon}
                            alt='paw'></img>
                        <p>{props.totalAnimals} {props.showing} near you!</p>

                    </div>

                    <div className={classes.options}>

                        <div>
                            <input type='radio' id='kitten' name='type'></input>
                            <label htmlFor='kitten'>Kitten</label>
                        </div>
                        <div>
                            <input type='radio' id='adult' name='type'></input>
                            <label htmlFor='adult'>Adult</label>
                        </div>
                    </div>
                </div>
                <div className={classes.saveSearchDiv}>
                    <button>SAVE SEARCH</button>
                </div>
            </section>
        )

    }
    if (props.showing === 'faves') {
        navBarBottom = (
            <section className={classes.bottomHeader}>
                <div className={classes.infoDiv}>
                    <div className={classes.nearYouDiv}>
                        <img
                            className={classes.bigIcon}
                            src={paw}
                            alt='paw'></img>
                        <p>All your faves that still need a home...</p>

                    </div>
                </div>
                <div className={classes.saveSearchDiv}>
                    <button>SAVE SEARCH</button>
                </div>
            </section>
        )
    }
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
                        </div>
                        <div
                            onClick={props.click}
                            id='showAll'
                            className={classes.contentLink}
                            href='all'>ALL
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
            {navBarBottom}

            {/* <section className={classes.bottomHeader}>
                <div className={classes.infoDiv}>
                    <img
                        id='paw'
                        onClick={props.click}
                        className={classes.bigIcon}
                        src={paw}
                        alt='paw'></img>

                    <p>{props.totalAnimals} {props.showing} near you!</p>
                </div>
                <div className={classes.saveSearchDiv}>
                    <button>SAVE SEARCH</button>
                </div>
            </section> */}
        </div>
    )
};

export default navbar;
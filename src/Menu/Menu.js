import React from 'react';
import classes from './Menu.css';
import x from './Images/times-solid.svg';
import chevronRight from './Images/chevron-right-solid.svg';
import searchIcon from './Images/search-solid.svg';

const menu = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.menuHeader}>
                <img id='hideMenu'
                    src={x}
                    alt='exit'
                    onClick={props.click}
                    className={classes.icon}>
                </img>
            </div>
            <ul>
                <li>
                    <div id='dogsMenu' onClick={props.click}>
                        <p>Dogs</p>
                        <img className={classes.smallIcon} src={chevronRight} alt='chevron right'></img>
                    </div>
                </li>
                <li >
                    <div id='catsMenu' onClick={props.click}>
                        <p>Cats</p>
                        <img className={classes.smallIcon} src={chevronRight} alt='chevron right'></img>
                    </div>
                </li>
                <li >
                    <div id='favesMenu' onClick={props.click}>
                        <p>Faves</p>
                        <img className={classes.smallIcon} src={chevronRight} alt='chevron right'></img>

                    </div>
                </li>
                <li >
                    <div id='allMenu' onClick={props.click}>
                        <p>All</p>
                        <img className={classes.smallIcon} src={chevronRight} alt='chevron right'></img>
                    </div>
                </li>
            </ul>
            <div className={classes.searchBox}>
                <input type='text' placeholder='Search'></input>
                <button>
                    <img className={classes.smallIcon} src={searchIcon} alt='search'></img>
                </button>
            </div>
        </div>
    )
};

export default menu;
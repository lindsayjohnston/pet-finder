import React from 'react';
import classes from './Footer.css';
import facebook from './Images/facebook-f-brands.svg';
import instagram from './Images/instagram-brands.svg';
import pinterest from './Images/pinterest-p-brands.svg';
import twitter from './Images/twitter-brands.svg';
import youtube from './Images/youtube-brands.svg';


const footer = props => {
    return (
        <footer>
            <div className={classes.subfooter}>
                <p>
                    ©2020 Lindsay Johnston
                 </p>
                <div>
                    <a href="https://fontawesome.com/license">All icons provide by Font Awesome</a>
                </div>
            </div>
            <div className={classes.socialDiv}>
                <img src={facebook} alt='facebook-icon'></img>
                <img src={twitter} alt='twitter-icon'></img>
                <img src={instagram} alt='instagram-icon'></img>
                <img src={youtube} alt='youtube-icon'></img>
                <img src={pinterest} alt='pinterest-icon'></img>

               
            </div>
        </footer>
    );
};

export default footer;
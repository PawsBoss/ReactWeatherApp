import React from 'react';
import classes from './Title.css';


const Title = () => {
    return (
        <div>
            <h1 className={classes.Title}>Weather Finder</h1>
            <h3 className={classes.Subtitle}>Find out temperature, conditions and more...</h3>
        </div>

    );
}

export default Title;

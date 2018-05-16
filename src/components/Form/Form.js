import React from 'react';
import classes from './Form.css';
const Form = (props) => {
    return (
        <form onSubmit={props.getWeather} className={classes.Form}>
            <input className={classes.Input} type="text" name="zip" placeholder="Zip Code...." />
            <input className={classes.Input} type="text" name="country" placeholder="Country..."/>
            <button className={classes.Button}>Submit</button>
        </form>
    );
};

export default Form;

import React from 'react';
import classes from './Weather.css';

// Here we will receive the weather data and display it
// We check to see that we do have the props and if so we return the <p>
// The && operator returns the last truthy thing

const Weather = (props) => {
    return (
        <div className={classes.Info}>
            {
                props.city && props.country && <p className={classes.Key}> Location:
                    <span className={classes.Value}> { props.city }, { props.country }</span>
                </p>
            }
            {
                props.temp && <p className={classes.Key}> Temperature:
                    <span className={classes.Value}> { props.temp }	</span>
                </p>
            }
            {
                props.humidity && <p className={classes.Key}> Humidity:
                    <span className={classes.Value}> { props.humidity } </span>
                </p>
            }
            {
                props.description && <p className={classes.Key}> Conditions:
                    <span className={classes.Value}> { props.description } </span>
                </p>
            }
            {
                props.error && <p className={classes.Error}>{ props.error }</p>
            }


        </div>
        );
}

export default Weather;

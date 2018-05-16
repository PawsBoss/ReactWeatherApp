import React, { Component } from 'react';
import axios from 'axios';


// My components
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';

//Css Modules
import classes from './App.css';



const APIKEY = '9e06359c9ca9dd283fd1f76ba1a1b4e5';

class App extends Component {
    state = {
        zipCode: '',
        city: undefined,
        country: 'us',
        units: 'imperial',
        temp: undefined,
        tempMax: undefined,
        tempMin: undefined,
        humidity: undefined,
        wind: undefined,
        description: '',
        error: ''

    }

    getWeather = (e) => {
        e.preventDefault();
        const zipCode = e.target.elements.zip.value;
        const country = e.target.elements.country.value;

        if(zipCode && country) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${country}`, {
                    params: {
                        APPID: APIKEY,
                        units: this.state.units
                    }
                })
                .then(res => {
                    this.setState({
                        zipCode: zipCode,
                        city: res.data.name,
                        country: country,
                        temp: res.data.main.temp.toFixed(),
                        tempMax: res.data.main.temp_max.toFixed(),
                        tempMin: res.data.main.temp_min.toFixed(),
                        humidity: res.data.main.humidity,
                        description: res.data.weather[0].description,
                        wind: res.data.wind.speed.toFixed()
                    });

                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            this.setState({error: "Please enter the values."});
        }
    }

  render() {


    return (
    <div className={classes.Wrapper}>
        <div className={classes.Main}>
            <div className={classes.Container}>
                <div className={["col-xs-5", classes.TitleContainer].join(' ')}>
                    <Title />
                </div>

                <div className={["col-xs-7", classes.FormContainer].join(' ')}>
                    <Form getWeather={this.getWeather} />
                    <Weather
                        city={this.state.city}
                        country={this.state.country}
                        temp={this.state.temp}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                        />
                </div>
            </div>
        </div>

    </div>
    );
  }
}

export default App;

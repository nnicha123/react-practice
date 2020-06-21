import React, { Component } from 'react'
import axios from 'axios'
import './Current.css'

class Weather extends Component {
    state = {
        weathers: {
            temp: '',
            description: '',
            windspeed: ''
        }
    }

    componentDidMount = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
        exclude=hourly,daily&appid=4e11e6c75ebb2e9eb272066e7c6cdd18`)
            .then(res => {
                // console.log(res.data.daily);
                console.log(res.data.current.temp) //Temp
                console.log(res.data.current.weather[0].main) //Clear
                console.log(res.data.current.wind_speed) //4.1

                this.setState({
                    weathers: {
                        temp: res.data.current.temp,
                        description: res.data.current.weather[0].main,
                        windspeed: res.data.current.wind_speed
                    }
                })
            })
    }
    getWeatherIcon = (description) => {
        if(description === 'Clear'){
            return 'http://openweathermap.org/img/wn/01d@2x.png'
        }
        else if (description === 'Clouds'){
            return 'http://openweathermap.org/img/wn/02d@2x.png'
        }
        else if(description === 'Rain'){
            return 'http://openweathermap.org/img/wn/10d@2x.png'
        }
    }

    render() {
        return (
            <div className="currentContainer">
                <ul className="currentList">
                    <li>Temp: {(this.state.weathers.temp - 273).toFixed(1)}°</li>
                    <img src={this.getWeatherIcon(this.state.weathers.description)}/>
                    <li>Wind-speed: {this.state.weathers.windspeed}m/s</li>
                </ul>
            </div>
        )
    }
}

export default Weather

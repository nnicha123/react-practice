import React, { Component } from 'react'
import axios from 'axios'
import './Weather.css'

class Weather extends Component {
    state = {
        weathers: [],
        rain: []
    }

    componentDidMount = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
        exclude=hourly,daily&appid=4e11e6c75ebb2e9eb272066e7c6cdd18`)
            .then(res => {
                console.log(res.data.daily);
                // console.log(res.data.daily[0].temp.max)
                let newWeather = []; let rainData = []
                for (let i = 0; i < 7; i++) {
                    newWeather.push(res.data.daily[i].temp)
                    rainData.push(res.data.daily[i].rain)
                }
                this.setState({ weathers: [...newWeather] })
                this.setState({ rain: [...rainData] })
                // console.log(this.state.weathers)
                // console.log(this.state.weathers[1].min)
            })
    }
    checkDay = (index) => {
        switch (index) {
            case 0: return 'Sun'
            case 1: return 'Mon'
            case 2: return 'Tue'
            case 3: return 'Wed'
            case 4: return 'Thu'
            case 5: return 'Fri'
            case 6: return 'Sat'
        }
    }
    checkRain = (index) => {
        if (this.state.rain[index] >= 7) {
            return 'https://openweathermap.org/img/wn/10d@2x.png'
        }
        else if (this.state.rain[index] < 5 && this.state.rain[index] > 3) {
            return 'https://openweathermap.org/img/wn/02d@2x.png'
        }
        else {
            return 'https://openweathermap.org/img/wn/01d@2x.png'
        }
    }
    render() {
        return (
            <div className="weatherContainer">
                {this.state.weathers.map((weather, index) => <div className="weatherCards">
                    <div>{this.checkDay(index)}</div>
                    <img src={this.checkRain(index)} />
                    <div className="weather-list">
                        <li>{(weather.min - 273.15).toFixed(1)}°</li>
                        <li>{(weather.max - 273.15).toFixed(1)}°</li>
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Weather

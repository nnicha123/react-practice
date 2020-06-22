import React, { Component } from 'react'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css';

class Test extends Component {
    state = {
        confirmed:0,
        recovered:0,
        hospitalized:0,
        deaths:0,
        newConfirmed:0,
        newRecovered:0
    }

    componentDidMount = () => {
        axios.get(`https://covid19.th-stat.com/api/open/today`)
        .then(res => {
            console.log(res.data.Confirmed)
            this.setState({
                confirmed:res.data.Confirmed,
                recovered:res.data.Recovered,
                hospitalized:res.data.Hospitalized,
                deaths:res.data.Deaths,
                newConfirmed:res.data.NewConfirmed,
                newRecovered:res.data.NewRecovered
            })
        })
       
    }
    
 
    
    render() {
        let i =0
        let str = ''
        while(i<3){
            str = str + '<li>Icon</li>'
            i++
        }
        return (
            <div>
                <li>Total Cases: {this.state.confirmed}</li>
                <li>Recovered Cases: {this.state.recovered}</li>
                <li>Hospitalized: {this.state.hospitalized}</li>
                <li>Total Deaths: {this.state.deaths}</li>
                <li>New Confirmed: {this.state.newConfirmed}</li>
                <li>Newly Recovered: {this.state.newRecovered}</li>
                {/* {createElementFromHTML(str)}                     */}
            </div>
        )
    }
}

export default Test

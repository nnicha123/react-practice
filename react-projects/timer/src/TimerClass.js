import React, { Component } from 'react'
import './Timer.css'

class TimerClass extends Component {
    state = {
        session: 0,
        break: 10
    }


    startTimer = () => {
        this.setState({ session: this.state.session })
        if (this.state.session > 0) {
            this.timer = setInterval(() => this.setState({
                session: this.state.session - 1
            }), 1000);
        }

    }
    stopTimer = () => {
        clearInterval(this.timer)
    }
    resetTimer = () => {
        clearInterval(this.timer)
        this.setState({ session: 0 })
    }
    render() {
        return (
            <div className="outerTimerWrap">
                <svg width="400" height="222" viewBox="0 0 296 122" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(-50 60)">
                    <g id="leftEar">
                        <path id="Ellipse 2" d="M108.612 50.5333C104.706 43.7681 99.5023 37.8655 93.3786 33.2546C87.2549 28.6436 80.3652 25.4402 73.2102 23.8769C66.0552 22.3137 58.8147 22.43 52.0147 24.2173C45.2147 26.0047 39.0262 29.4182 33.8987 34.2098C28.7713 39.0015 24.8338 45.0508 22.3724 51.9183C19.911 58.7858 18.9876 66.299 19.6691 73.9117C20.3506 81.5245 22.62 89.0457 26.3124 95.9287C30.0048 102.812 35.0275 108.884 41.0153 113.703L67.909 74.0333L108.612 50.5333Z" fill="#BD3A3A" />
                        <rect id="Rectangle 1" x="89.6886" y="115.957" width="56" height="19.2308" transform="rotate(-130 89.6886 115.957)" fill="#BD3A3A" />
                    </g>
                </svg>
                <svg width="400" height="222" viewBox="0 0 296 122" fill="none">
                    <g id="rightEar" transform="translate(70 10)">
                        <path id="Ellipse 3" d="M252.728 107.507C259.013 102.234 264.218 95.8354 267.967 88.7765C271.716 81.7177 273.913 74.1758 274.4 66.6991C274.886 59.2223 273.65 51.9984 270.78 45.5524C267.91 39.1064 263.479 33.6001 257.809 29.4338C252.139 25.2675 245.372 22.5457 238 21.4664C230.628 20.387 222.836 20.9771 215.191 23.1938C207.546 25.4105 200.239 29.1981 193.802 34.2814C187.365 39.3647 181.958 45.616 177.976 52.5809L222.517 71.5031L252.728 107.507Z" fill="#BD3A3A" />
                        <rect id="Rectangle 2" x="240.728" y="62.3613" width="56" height="19.2308" transform="rotate(130 240.728 62.3613)" fill="#BD3A3A" />
                    </g>
                </svg>
                {/* <p>{session}</p> */}
                <div className="PomodoroWrap">
                    <div className="sessionTime">
                        <h3>Session Time</h3>
                        <div className="lowerSessionTime">
                            <button className="subtractTime" onClick={() => this.setState({ session: Number(this.state.session) - 1 })}>-</button>
                            <input className="inputTime" type="text" value={this.state.session} onChange={(e) => this.setState({ session: e.target.value })} />
                            <button className="addTime" onClick={() => this.setState({ session: Number(this.state.session) + 1 })}>+</button>
                        </div>
                    </div>
                    <div className="sessionTime">
                        <h3>Break Time</h3>
                        <div className="lowerSessionTime">
                            <button className="subtractTime">-</button>
                            <input className="inputTime" type="text" value={this.state.break} onChange={(e) => this.setState({ break: e.target.value })} />
                            <button className="addTime">+</button>
                        </div>
                    </div>
                    <div className="timerButtons">
                        <button className="startTimer" onClick={this.startTimer} >Start</button>
                        <button className="stopTimer" onClick={this.stopTimer}>Stop</button>
                        <button className="resetTimer" onClick={this.resetTimer}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerClass

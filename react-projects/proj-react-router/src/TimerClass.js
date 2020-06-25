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
            <div className="outerTimerWrap" style={{ marginTop: '0' }}>
                {/* <p>{session}</p> */}
                <div className="innerWrapTimer">
                    <div className="circleAlarm"></div>
                    <div className="PomodoroWrap">
                        <div className="sessionTime" style={{ paddingTop: '20px' }}>
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
                    <div className="circleAlarm-right"></div>
                </div>
            </div>
        )
    }
}

export default TimerClass

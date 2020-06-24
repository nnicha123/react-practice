import React, { useState, useEffect } from 'react'
import './Timer.css'

function Timer() {
    const [timer, setTimer] = useState(10)
    const [count, setCount] = useState(10)
    const [start,setStart] = useState(false)
    let interval;
        const startTimer = () => {
            interval = setInterval(() => {
                setCount(count => count - 1);
            }, 1000);
            // return (interval) => clearInterval(interval);
        }
        const stopTimer = () => {

            return  setInterval(() => {setCount(0)})
            // clearInterval(interval)
        }
 
    return (
        <div className="outerTimerWrap">
            {/* <p>{count}</p> */}
            <div className="PomodoroWrap">
                <div className="sessionTime">
                    <h3>Session Time</h3>
                    <div className="lowerSessionTime">
                        <button className="subtractTime">-</button>
                        <input className="inputTime" type="text" value={count} />
                        <button className="addTime">+</button>
                    </div>
                </div>
                <div className="sessionTime">
                    <h3>Break Time</h3>
                    <div className="lowerSessionTime">
                        <button className="subtractTime">-</button>
                        <input className="inputTime" type="text" value={timer} />
                        <button className="addTime">+</button>
                    </div>
                </div>
                <div className="timerButtons">
                    <button className="startTimer" onClick={startTimer}>Start</button>
                    <button className="stopTimer" onClick={stopTimer}>Stop</button>
                </div>
            </div>
        </div>
    )
}

export default Timer


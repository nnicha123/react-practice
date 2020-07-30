import React from 'react'
import CountUp, { useCountUp } from 'react-countup'


function CountupTest() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({ duration: 150, end: 10000, startOnMount: false })
  return (
    <div className="App">
      <h1>{countUp}</h1>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(1000)}>Update to 1000</button>
      <br />
      <h1>
        <CountUp end={200} duration={5} />
      </h1>
      <br />
      <h1>
        <CountUp start={500} end={1000} duration={5} />
      </h1>
      <br />
      <h1>
        <CountUp end={1000} duration={5} prefix='$' decimals={2} />
      </h1>
      <br />
      <h1>
        <CountUp end={1000} duration={5} suffix='USD' decimals={2} />
      </h1>
    </div>
  )
}

export default CountupTest

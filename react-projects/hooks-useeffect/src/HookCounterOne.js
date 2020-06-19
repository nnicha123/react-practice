import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log('useEffect -Updating title') //can be used to achieve the same result as componentDidMount (execute only at the start) combined with componentDidUpdate (executes on update but not the start)
        // useEffect available for react hooks
    },[count]) //to conditionally run based on if count changes pass count as a second parameter
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne

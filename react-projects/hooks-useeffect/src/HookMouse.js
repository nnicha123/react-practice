import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e => {
        console.log('logMousePosition');
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition)

        // what we return is the cleanup function after unmount
        return () => {
            console.log('Component un-mounts');
            window.removeEventListener('mousemove',logMousePosition);
        }

    },[]) //empty second argument meaning it doesn't depend on any parameter
    // so useEffect will only be called once (like componentDidMount) i.e. like the ClassMouse example

    return (
        <div>
            Hooks X - {x}  Y - {y}
        </div>
    )
}

export default HookMouse

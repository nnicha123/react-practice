import React from 'react';

function App1(props){
    let {data,send,name} = props
    console.log(props.data)
    return(<div>Data: {props.data}, Send : {props.send}, Name : {props.name}</div>)
}
export default App1;
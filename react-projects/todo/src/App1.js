import React from 'react';

function App1(props){
    let {data,send,name} = props
    console.log(props.data)
    return(<div>Data: {data}, Send : {send}, Name : {name}</div>)
}
export default App1;
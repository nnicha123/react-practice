import React, {useState} from 'react';
import Tweet from './Tweet';
function App(){

  const [users,setUsers] = useState([
    {name:'Nicha',message:'Hello there'},
    {name:'John', message:'I am John Snow'},
    {name:'Traversy', message:'I am awesome'}
  ])

  // const [isRed, setRed] = useState(false);
  // const [count,setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed)
  // }

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
      {/* <h1 className={isRed ? 'red' : ''}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {/* <Tweet name="Dev Ed" message="This is a random Tweet"/>
      <Tweet name="John Snow" message="I am the true king"/>
      <Tweet name="Traversy Media" message="700k my dudes"/>
      <Tweet name="Mosh" message="My new course is available"/> */}
    </div>
  );
}
export default App;
let abc = 'abc';
let component = <div>
      <h1>Component</h1>
      <p>Component paragraph</p>
      <p>Second paragraoh</p>
      </div>
 let component2 = [
   <li>a</li>,
   <li>b</li>
 ]
component2.push(<li>c</li>,<li>d</li>)
let arr = [1,2,3,4,5];
let data = arr.map( el => <li>{el}</li>)

arr = [{name: "Nicha",age:24,height:166,image:"https://cdn.mos.cms.futurecdn.net/iuWB2NM48R2r9q7QhyJfhe-650-80.jpg"}]
let newData = arr.map( obj => <div>
                        <p>name : {obj.name}</p>
                        <p>age : {obj.age}</p>
                        <p>height : {obj.height}</p>
                        <img src={obj.image}/>
                      </div>)
                   
ReactDOM.render(
 newData,
document.getElementById('root')
);

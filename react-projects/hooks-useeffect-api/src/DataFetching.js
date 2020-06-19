import React,{useState,useEffect} from 'react';
import axios from 'axios'

function DataFetching() {
    const [posts,setPost] = useState([]);
    // const [id,setId] = useState(1);
    // const [idFromButtonClick,setIdFromClick] = useState(1)

    // const handleClick = () => {
    //     setIdFromClick(id)
    // }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]) //monitor values from click instead of from input
    return (
        <div>
            {/* <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Click to change id</button> */}
            {/* <div>{post.title}</div> */}
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching

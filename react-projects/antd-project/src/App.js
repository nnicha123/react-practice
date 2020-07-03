import React from 'react';
import {Button} from 'antd'
import { ShoppingFilled,HeartFilled,UserOutlined } from '@ant-design/icons';
import './App.css'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">

      <Button  icon={<HeartFilled style={{fontSize:'25px'}}/>} style={{color:'maroon',border:'none'}}></Button>
      <Button  icon={<ShoppingFilled style={{fontSize:'25px'}}/>} style={{color:'maroon',border:'none'}}></Button>
      <Button  icon={<UserOutlined style={{fontSize:'25px'}}/>} style={{color:'maroon',border:'none'}}></Button>
    </div>
  );
}

export default App;

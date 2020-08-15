import React from 'react';
import { Button, DatePicker } from 'antd'
import { ShoppingFilled, HeartFilled, UserOutlined } from '@ant-design/icons';
import './App.css'
import 'antd/dist/antd.css';

function onChange(date) {
  console.log(date);
}

function App() {
  return (
    <div className="App">
      <DatePicker onChange={onChange} />
      <Button icon={<HeartFilled style={{ fontSize: '25px' }} />} style={{ color: 'maroon', border: 'none' }}></Button>
      <Button icon={<ShoppingFilled style={{ fontSize: '25px' }} />} style={{ color: 'maroon', border: 'none' }}></Button>
      <Button icon={<UserOutlined style={{ fontSize: '25px' }} />} style={{ color: 'maroon', border: 'none' }}></Button>
    </div>
  );
}

export default App;

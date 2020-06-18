import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Form, Input, Button } from 'antd';
import _default from 'antd/lib/time-picker';

function App() {
  const layout = {
    labelCol: {
      xs: 6,
      sm: 8,
      md: 10
    },
    wrapperCol: {
      xs: 18,
      sm: 16,
      md: 14
    },

  }
  let onFinish = (val) => {
    console.log(val)
  }
  return (
    <div className="App">
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={16} xl={14} xxl={12}>
          <Form onFinish={onFinish} {...layout}>
            <Form.Item label="Name" name="name"
              rules={[{ required: true, message: "Name is Required" }, { max: 6, min: 3, message: "Needs to be between 3-6" }]}>
              <Input placeholder="Name" />
            </Form.Item >
            <Form.Item label="PhoneNumber" name="phoneNumber"
              rules={[
                { len: 10, message: "Number incorrect" }
              ]}>
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item label="Email" name="email"
              rules={[{ required: true, message: "Email is required" },
              { type: 'email', message: "Must be of type email" }
              ]}>
              <Input placeholder="Email" type="email" />
            </Form.Item >
            <Form.Item label="Password" name="password"
              rules={[{ required: true, message: "Password is required" },
              { min: 12, max: 24, message: "Password needs to be between 12-24 characters" }
              ]}>
              <Input placeholder="Password" type="password"/>
            </Form.Item>
            <Button htmlType="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;

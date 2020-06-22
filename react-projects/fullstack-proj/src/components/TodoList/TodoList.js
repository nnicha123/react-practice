import React, { useState, useEffect } from 'react'
import { List, Input, Button, Row, Col, Divider, Typography, Space } from 'antd'
import _ from 'lodash'
import axios from '../../config/axios'
import Todo from './Todo';

function TodoList() {
    const { Text } = Typography;
    const [todoList, setTodoList] = useState([]);
    const [inputField, setInputField] = useState('');

    const fetchTodoList = async() => {
        const httpResponse = await axios.get('/todo-list')
        setTodoList(httpResponse.data)
    }
    useEffect(() => {
        fetchTodoList()
    },[])

    const addTodoItems = async() => {
        await axios.post('/todo-list',{task:inputField})
        fetchTodoList()
    }
    const deleteTodoItem = async(id) => {
        await axios.delete(`/todo-list/${id}`)
        fetchTodoList()
    }

    return (
        <Row justify='center'>
            <Col>
                <Row justify='center'>
                    <Text type='warning'>Please add your Todos</Text>
                </Row>
                <Row justify='center'>
                    <Col span={20}>
                        <Input value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button style={{ width: '100%' }} onClick={addTodoItems}>Add</Button>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <List
                        style={{ width: '450px' }}
                        header={<div>Todo List page</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={todo => (
                            <List.Item>
                                <Todo todo={todo} deleteTodoItem={deleteTodoItem}fetchTodoList={fetchTodoList}/>
                            </List.Item>
                        )} />
                </Row>
            </Col>
        </Row>
    )
}

export default TodoList

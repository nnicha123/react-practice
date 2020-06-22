import React, { useState } from 'react'
import { Row, Col, Button, Input } from 'antd'
import axios from '../../config/axios'

function Todo(props) {
    const [changeInput, setChangeInput] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    const updateTodoItem = async (id) => {
        await axios.put(`/todo-list/${id}`, { task: changeInput })
        props.fetchTodoList()
        setIsEdit(false)
    }
    const toggleEdit = () => {
        setChangeInput(props.todo.task)
        setIsEdit(true)
    }

    let contents = (
        <Row style={{ width: '100%' }}>
            <Col span={20}><Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} /></Col>
            <Col span={4}><Button type='primary' onClick={() => updateTodoItem(props.todo.id)}>Done</Button></Col>
        </Row>
    )
    if (!isEdit) {
        contents = (
            <Row style={{ width: '100%' }}>
                <Col span={16}>
                    <Row justify='start'>{props.todo.task}</Row>
                </Col>
                <Col span={4}>
                    <Button style={{ backgroundColor: 'orange' }} onClick={() => toggleEdit()}>Edit</Button>
                </Col>
                <Col span={4}>
                    <Button type='danger' onClick={() => props.deleteTodoItem(props.todo.id)}>Delete</Button>
                </Col>
            </Row>
        )
    }
    return (
        <div style={{ width: '100%' }}>
            {contents}
        </div>
    )
}

export default Todo

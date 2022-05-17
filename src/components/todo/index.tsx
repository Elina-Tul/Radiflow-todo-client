import React from 'react';
import { Button, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axiosInstance from '../../utils/axiosInstance';
import { Todo as TodoType, TodoArray } from '../../types/types';
import { StyledTodo } from './styled';

function Todo({ todoItem, setTodos } : { todoItem: TodoType, setTodos: any }) {
    
    const { description, id } = todoItem;

    const deleteTodo = async (id: string) => {
        try {
            const deletedTodoResponse = await axiosInstance.delete(`/todos/${id}`);
            if(deletedTodoResponse.status === 204) {
                message.success('task deleted');
                setTodos((todoState : TodoArray) => todoState.filter((curr : TodoType) => curr.id !== id));
            }
        } catch (error) {
            message.error('something went wrong');
        }
    }

    return (
        <StyledTodo>
            {description}
            <Button onClick={() => deleteTodo(id)} shape="circle" icon={<DeleteOutlined />} />
        </StyledTodo>
    );
}

export default Todo;
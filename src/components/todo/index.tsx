import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axiosInstance from '../../utils/axiosInstance';
import { Todo as TodoType } from '../../types/types';
import { StyledTodo } from './styled';

function Todo({ id, description } : TodoType) {
    
    const deleteTodo = async (id: string) => {
        try {
            const deletedTodoResponse = await axiosInstance.delete(`/todos/${id}`);
            if(deletedTodoResponse.data) {

            }
            console.log(deletedTodoResponse.data)
        } catch (error) {

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
import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { TodoArray } from '../../types/types';
import axiosInstance from '../../utils/axiosInstance';
import { NewTodoStyled } from './styled';

function NewTodo({ setTodos }: { setTodos: any }) {
    const [todoValue, setTodoValue] = useState<string>('');

    const createNewTodo = async () => {
        try {
            const newTodoResponse = await axiosInstance.post('/todos', { description: todoValue });
            const { id: createdTodoId } = newTodoResponse.data;

            if (createdTodoId) {
                message.success('new task created');
                setTodos((todoState: TodoArray) => [...todoState, { id: createdTodoId, description: todoValue}]);
                setTodoValue('');
            }
        } catch (error: any) {
            const errorMessage = error?.response?.data?.error || `something wend wrong`;
            message.error(errorMessage);
        }
    }

    return (
        <NewTodoStyled>
            <Input
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
                size="large"
                placeholder="new task description"
            />
            <Button
                disabled={!todoValue.length}
                type="primary"
                size='large'
                onClick={createNewTodo}
            >
                Add Todo +
            </Button>
        </NewTodoStyled>
    )
}

export default NewTodo;

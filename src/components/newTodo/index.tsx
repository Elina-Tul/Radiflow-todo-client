import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
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
                setTodos((todoState: TodoArray) => [...todoState, { id: createdTodoId, description: todoValue}]);
                setTodoValue('');
            }
        } catch (error) {

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

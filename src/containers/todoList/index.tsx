import React, { useEffect, useState } from 'react';
import { Divider, List } from 'antd';
import { Todolist, TodoArray } from '../../types/types';
import { dataMapper } from './dataMapper';
import Todo from '../../components/todo';
import axiosInstance from '../../utils/axiosInstance';
import NewTodo from '../../components/newTodo';
import { StyledTodoList } from './styled';



function TodoList() {
    const [todos, setTodos] = useState<TodoArray>([]);

    useEffect(() => {
        const fetchTodoList = async () => {
            try {
                const todoList = await axiosInstance.get('/todos');
                const { data: todoListData } = todoList;
                setTodos(dataMapper(todoListData));
            } catch (error) {

            }
        }

        fetchTodoList();
    }, []);

    return (
        <StyledTodoList>
            <h2>RadiFlow Todo List</h2>
            <NewTodo setTodos={setTodos} />
            <Divider />
            <List
                dataSource={todos}
                renderItem={item => {
                    return (
                        <List.Item>
                            <Todo todoItem={item} setTodos={setTodos} />
                        </List.Item>)
                }}
            />

        </StyledTodoList>
    );
}

export default TodoList;
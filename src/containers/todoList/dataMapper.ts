import { Todolist, TodoArray } from '../../types/types';

const dataMapper = (todoListData: Todolist) : TodoArray => {
    return Object.entries(todoListData).reduce((allTodos: TodoArray, currentTodoEntrie: [string, string]) => {
        const [key, value] = currentTodoEntrie;
        return [ ...allTodos, {id: key, description: value}];
    }, <TodoArray>[]);
}

export { dataMapper };
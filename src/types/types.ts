type Todolist = {
    [key: string] : string
}

type Todo = {
    id: string
    description: string
}

type TodoArray = Todo[];

export type { Todolist, Todo, TodoArray };

import { ITodo } from "../todos/ITodo";

export const apiFetchTodoData = async (): Promise<{todos: ITodo[]}> => {
    return (await fetch("/api/todos")).json();
}

export const apiModifyTodo = async (id: string, todo: ITodo): Promise<{}> => {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
    };

    return (await fetch(`/api/todos/${id}`, requestOptions)).json();
}
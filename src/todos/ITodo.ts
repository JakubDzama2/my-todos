export type ITodoPriority = 'low' | 'medium' | 'high';

export type ITodoState = 'done' | 'undone';

export interface ITodo {
    id: string;
    title: string;
    priority: ITodoPriority;
    content: string;
    state: ITodoState;
    createdAt?: Date;
    lateDate?: Date;
    doneAt?: Date;
}
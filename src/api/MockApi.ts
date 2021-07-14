import { addDays } from "../todos/extensions";
import { ITodo } from "../todos/ITodo"

const todos: ITodo[] = [
    {
        id: '1',
        title: 'Close issue',
        content: 'Close the issueee!',
        priority: 'medium',
        state: 'undone',
        createdAt: (new Date()),
        lateDate: addDays(new Date(), 6)
    },
    {
        id: '2',
        title: 'Open issue',
        content: 'Open the issueee!',
        priority: 'low',
        state: 'done',
        createdAt: (new Date()),
        lateDate: addDays(new Date(), 2)
    },
    {
        id: '3',
        title: 'Open pull request',
        content: 'Open the pull request!',
        priority: 'high',
        state: 'undone',
        createdAt: (new Date()),
        lateDate: addDays(new Date(), 12)
    },
];

export const fetchTodos = () => {
    return new Promise<ITodo[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(todos);
        }, 2000);
    })
}
export interface IToDo{
    id: number;
    text: string;
    checked: boolean;
}

export interface IContextToDo{
    todos: IToDo[];
    saveTodo: (todo: string) => void;
    updateTodo: (todo: IToDo) => void;
}
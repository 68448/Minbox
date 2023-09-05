import React, { FC, createContext, useState } from 'react';
import CreateToDo from './CreateToDo';
import { IContextToDo, IToDo } from '../types/types';
import ToDoItem from './ToDoItem';

export const ContextCreateToDo = createContext<IContextToDo | null>(null)

enum Tubles{'all', 'done', 'undone'}
type LogLevelStrings = keyof typeof Tubles;

const ToDo: FC = () => {

    const [todos, setTodos] = useState<IToDo[]>([])
    const [tubles, setTunles] = useState<LogLevelStrings>('all')

    //Сохранение новго todo
    const saveTodo = (todo: string) => {
        const newTodo: IToDo = {
          id: Math.random(), // нельзя, но для примера пойдет
          text: todo,
          checked: false
        }
        setTodos([...todos, newTodo])
    }
    //Обновление старого todo
    const updateTodo = (updateTodo: IToDo) => {
        const newTodos = todos.map((todo: IToDo) => {
            if( updateTodo.id === todo.id ){
                todo = {...updateTodo}
            }
            return todo
        })
        setTodos(newTodos)        
    }

    //Отображение нужного списка todo(все, выполненные, невыполненные)
    const showToDos = (e: React.MouseEvent<HTMLButtonElement>) => {
        switch(e.currentTarget.id){
            case 'all':
                setTunles('all')
                break;
            case 'done':
                setTunles('done')
                break;
            case 'undone':
                setTunles('undone')
                break;
        }
    }

    return (
        <div className='mt-5 max-w-xl mx-auto'>
            <ContextCreateToDo.Provider value={{todos, saveTodo, updateTodo}}>
            <CreateToDo />
                <div className="mt-5 border-t-2 border-top-gray">
                    <ul className='list-none'>
                    {
                        tubles === 'all' ? 
                        (
                            todos.map((todo: IToDo) => (
                                <ToDoItem key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} />
                            ))
                        ): tubles === 'done' ?
                        (

                            todos.filter((todo: IToDo) => todo.checked).map((todo) => (
                                <ToDoItem key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} />
                            ))

                        ): 
                        (
                            todos.filter((todo: IToDo) => todo.checked === false).map((todo) => (
                                <ToDoItem key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} />
                            ))
                        )           

                    }
                    </ul>
                </div>
                <div className='mt-5 border-t-2 border-top-gray flex gap-4 justify-center pt-4'>
                    <button onClick={showToDos} data-testid='all' id="all">Все</button>
                    <button onClick={showToDos} data-testid='done' id="done">Выполненные</button>
                    <button onClick={showToDos} data-testid='undone' id="undone">Невыполненные</button>
                </div>
            </ContextCreateToDo.Provider>
        </div>
    );
};

export default ToDo;
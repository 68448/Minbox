import React, {FC, useContext} from 'react';
import { IToDo } from '../types/types';
import { ContextCreateToDo } from './ToDo';

const ToDoItem:FC<IToDo> = (todo) : JSX.Element => {

    

    const contextTodos = useContext(ContextCreateToDo)

    const changeCheck = () => { //Обновить состояние checked

        const changedToDo = {...todo}
        changedToDo.checked = !todo.checked

        contextTodos?.updateTodo(changedToDo)
        
    }
    return (
        todo ? (
            <li key={todo.id} className='flex gap-3 border-b border-b-gray pb-3 pt-3' onClick={changeCheck}>
            <input type="checkbox" checked={todo.checked} onChange={changeCheck}/>
            <p className=''>{todo.text}</p>                               
        </li>
        ) : <></>
    )

};

export default ToDoItem;
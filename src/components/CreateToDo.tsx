import React, { FC, useContext, useState } from 'react';
import { ContextCreateToDo } from './ToDo';

const CreateToDo: FC = () => {

    const contextTodos = useContext(ContextCreateToDo)

    const [todo, setToDo] = useState<string>('');
    const [error, setError] = useState<boolean>(false)

    const createToDo = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(todo){
            contextTodos?.saveTodo(todo)
            setError(false)
            setToDo('')
        }else{
            setError(true)
        }
        
        
    }

    const changeToDo = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setToDo(e.target.value)
    }

    return (
        <>        
            <form onSubmit={createToDo} className='flex'>
                <input type="text" className='outline-none px-4 py-2 w-full focus:border' placeholder='Введите задачу' value={todo} onChange={changeToDo} aria-label='createToDo'/>            
                <button type='submit' className='border outline-none text-base px-3 py-2 rounded-lg transition-all hover:bg-black hover:text-white' aria-label='createToButton'>Добавить задачу</button>
            </form>
            {error && <p className='text-red-600 text-sm'>Задача не может быть пуста</p>}
        </>
    );
};

export default CreateToDo;
import { render, screen } from '@testing-library/react'
import ToDo from './ToDo'
import ToDoItem from './ToDoItem'

describe('ToDO component', () => {
  it('ToDO render', () => {
    render(<ToDo />)

    expect(screen.queryByRole('button', { name: 'Все' })).toBeInTheDocument()
  })
})

describe('ToDO list', () => {
  it('todo in list', () => {
    const todos = [{ id: 1, text: 'task 1', checked: false }]
    render(
      <div className="mt-5 max-w-xl mx-auto">
        <div className="mt-5 border-t-2 border-top-gray">
          <ul className="list-none">
            {todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                checked={todo.checked}
              />
            ))}
          </ul>
        </div>
      </div>
    )

    expect(screen.getByText(todos[0].text)).toBeInTheDocument()
  })

  it('todo spisok is null', () => {
    const todos = []
    render(
      <div className="mt-5 max-w-xl mx-auto">
        <div className="mt-5 border-t-2 border-top-gray">
          <ul className="list-none">
            {todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                checked={todo.checked}
              />
            ))}
          </ul>
        </div>
      </div>
    )

    expect(screen.queryByRole('ul')).toBeNull()
  })

  it('todos show only checked', () => {
    const todos = [
      { id: 1, text: 'task 1', checked: true },
      { id: 2, text: 'task 2', checked: false },
    ]
    const tubles = 'done'
    render(
      <div className="mt-5 max-w-xl mx-auto">
        <div className="mt-5 border-t-2 border-top-gray">
          <ul className="list-none">
            {tubles === 'all'
              ? todos.map((todo) => (
                  <ToDoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    checked={todo.checked}
                  />
                ))
              : tubles === 'done'
              ? todos
                  .filter((todo) => todo.checked)
                  .map((todo) => (
                    <ToDoItem
                      key={todo.id}
                      id={todo.id}
                      text={todo.text}
                      checked={todo.checked}
                    />
                  ))
              : todos
                  .filter((todo) => todo.checked === false)
                  .map((todo) => (
                    <ToDoItem
                      key={todo.id}
                      id={todo.id}
                      text={todo.text}
                      checked={todo.checked}
                    />
                  ))}
          </ul>
        </div>
      </div>
    )

    expect(screen.queryByText(todos[0].text)).toBeInTheDocument()
    expect(screen.queryByText(todos[1].text)).not.toBeInTheDocument()
  })

  it('todos show only checked', () => {
    const todos = [
      { id: 1, text: 'task 1', checked: false },
      { id: 2, text: 'task 2', checked: true },
    ]
    const tubles = 'undone'
    render(
      <div className="mt-5 max-w-xl mx-auto">
        <div className="mt-5 border-t-2 border-top-gray">
          <ul className="list-none">
            {tubles === 'all'
              ? todos.map((todo) => (
                  <ToDoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    checked={todo.checked}
                  />
                ))
              : tubles === 'done'
              ? todos
                  .filter((todo) => todo.checked)
                  .map((todo) => (
                    <ToDoItem
                      key={todo.id}
                      id={todo.id}
                      text={todo.text}
                      checked={todo.checked}
                    />
                  ))
              : todos
                  .filter((todo) => todo.checked === false)
                  .map((todo) => (
                    <ToDoItem
                      key={todo.id}
                      id={todo.id}
                      text={todo.text}
                      checked={todo.checked}
                    />
                  ))}
          </ul>
        </div>
      </div>
    )

    expect(screen.queryByText(todos[0].text)).toBeInTheDocument()
    expect(screen.queryByText(todos[1].text)).not.toBeInTheDocument()
  })

  it('add new todo', () => {
    const todos = [{ id: 1, text: 'task 1', checked: false }]
    todos.push({ id: 2, text: 'task 2', checked: false })
    render(
      <div className="mt-5 max-w-xl mx-auto">
        <div className="mt-5 border-t-2 border-top-gray">
          <ul className="list-none">
            {todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                checked={todo.checked}
              />
            ))}
          </ul>
        </div>
      </div>
    )

    expect(screen.getByText(todos[1].text)).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import ToDoItem from './ToDoItem'

describe('check props', () => {
  it('get full props', () => {
    const todo = {
      id: 1,
      text: 'task1',
      checked: false,
    }

    const rend = render(
      <div className="mt-5 max-w-xl mx-auto">
        <div className="mt-5 border-t-2 border-top-gray">
          <ul className="list-none">
            <ToDoItem id={todo.id} text={todo.text} checked={todo.checked} />
          </ul>
        </div>
      </div>
    )

    expect(rend.getByText(todo.text)).toBeInTheDocument()
  })

  it('get null props', () => {
    const rend = render(
      <div className="mt-5 max-w-xl mx-auto">
        <div className="mt-5 border-t-2 border-top-gray">
          <ul className="list-none">
            <ToDoItem id={null} text={null} checked={null} />
          </ul>
        </div>
      </div>
    )

    expect(rend.queryByRole('li')).not.toBeInTheDocument()
  })
})

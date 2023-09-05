import { render, screen, fireEvent } from '@testing-library/react'
import CreateToDo from './CreateToDo'
import App from '../App'

const setup = () => {
  const utils = render(<CreateToDo />)
  const input = screen.getByLabelText('createToDo')
  const button = screen.getByLabelText('createToButton')
  return {
    input,
    button,
    ...utils,
  }
}

describe('CreateToDo component', () => {
  it('ToDO render', async () => {
    const { input } = setup()
    const utils = render(<CreateToDo />)
    expect(input).toBeInTheDocument(utils)
  })
})

describe('Write in input', () => {
  it('Write task1 in input', async () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'task1' } })
    expect(input).toHaveValue('task1')
  })
})

describe('Click on button', () => {
  it('add todo', async () => {
    const { button, utils } = setup()
    await fireEvent.click(button)
    expect(button).toHaveValue('')
    expect(screen.getByText('Задача не может быть пуста')).toBeInTheDocument()
  })

  it('check task in spisok while add', async () => {
    const newRender = render(<App />)
    const input = newRender.getByLabelText('createToDo')
    await fireEvent.change(input, { target: { value: 'task1' } })
    const button = newRender.getByLabelText('createToButton')
    await fireEvent.click(button)
    expect(button).toHaveValue('')
    expect(screen.getByText('task1')).toBeInTheDocument(newRender)
  })
})

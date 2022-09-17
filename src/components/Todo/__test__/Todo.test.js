import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockedTodo = () => (
	<BrowserRouter>
		<Todo />
	</BrowserRouter>
);

const addToDos = (todos) => {
	const inputElement = screen.getByRole('textbox');
	const addToDoButton = screen.getByRole('button', { name: 'Add' });

	todos.forEach((todo) => {
		fireEvent.change(inputElement, {
			target: { value: todo },
		});
		fireEvent.click(addToDoButton);
	});
};

describe('Todo', () => {
	test('Render the exact number of elements corresponding with the number of tasks entered with their values being the tasks', () => {
		render(<MockedTodo />);
		addToDos(['Task 1', 'Task 2', 'Task 3']);
		const todoElements = screen.getAllByTestId('todo-component-text');
		expect(todoElements.length).toBe(3);

		expect(todoElements[0].textContent).toBe('Task 1');
		expect(todoElements[1].textContent).toBe('Task 2');
		expect(todoElements[2].textContent).toBe('Task 3');
	});

	test('Any task entered should be marked uncompleted at first', () => {
		render(<MockedTodo />);
		addToDos(['Task 1']);
		const todoElement = screen.getByTestId('todo-component');

		expect(todoElement).not.toHaveClass('todo-item-active');
	});

	test('Mark task as completed upon click of the task', () => {
		render(<MockedTodo />);
		addToDos(['Task 1']);
		const todoElement = screen.getByTestId('todo-component');
		const todoElementText = screen.getByTestId('todo-component-text');
		fireEvent.click(todoElementText);

		expect(todoElement).toHaveClass('todo-item-active');
	});

	test('Todo Element should be removed from list if delete button is clicked', () => {
		render(<MockedTodo />);
		addToDos(['Task 1', 'Task 2']);

		let todoElements = screen.getAllByTestId('todo-component');
		expect(todoElements.length).toBe(2);
		const deleteTodoButton = screen.getAllByRole('button', { name: 'X' });
		fireEvent.click(deleteTodoButton[0]);
		todoElements = screen.getAllByTestId('todo-component');
		expect(todoElements.length).toBe(1);
	});
});

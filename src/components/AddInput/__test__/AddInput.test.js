import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedFn = jest.fn();

describe('AddInput', () => {
	test('AddInput Component should render input Element', () => {
		render(<AddInput todos={[]} setTodos={mockedFn} />);

		const inputElement = screen.getByRole('textbox');
		expect(inputElement).toBeVisible();
	});

	test('User can type into input Element', () => {
		render(<AddInput todos={[]} setTodos={mockedFn} />);

		const inputElement = screen.getByRole('textbox');
		fireEvent.change(inputElement, {
			target: { value: 'Go grocery shopping' },
		});
		expect(inputElement.value).toBe('Go grocery shopping');
	});

	test('Input value is cleared after todo is added', () => {
		render(<AddInput todos={[]} setTodos={mockedFn} />);

		const inputElement = screen.getByRole('textbox');
		const addToDoButton = screen.getByRole('button', { name: 'Add' });
		fireEvent.change(inputElement, {
			target: { value: 'Go grocery shopping' },
		});
		fireEvent.click(addToDoButton);
		expect(inputElement.value).toBe('');
	});
});

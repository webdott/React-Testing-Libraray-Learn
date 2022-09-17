import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
	return (
		<BrowserRouter>
			<TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
		</BrowserRouter>
	);
};

describe('TodoFooter', () => {
	test('Footer renders whatever number of tasks is given to it', () => {
		render(<MockTodoFooter numberOfIncompleteTasks={0} />);

		const textElement = screen.getByText('0 tasks left');
		expect(textElement).toBeTruthy();
	});

	test('when number of incomplete tasks is 1, it should read "1 task left"', () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);

		const textElement = screen.getByText('1 task left');
		expect(textElement).toBeTruthy();
	});
});

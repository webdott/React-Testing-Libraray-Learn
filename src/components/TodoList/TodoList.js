import React from 'react';
import TodoFooter from '../TodoFooter/TodoFooter';
import './TodoList.css';

function TodoList({ todos, setTodos }) {
	const updateTask = (id) => {
		let updatedTasks = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				return todo;
			} else {
				return todo;
			}
		});
		setTodos(updatedTasks);
	};

	const deleteTask = (id) => {
		const updatedTasks = todos.filter((_, index) => index !== id);

		setTodos(updatedTasks);
	};

	const calcNumberOfIncompletedTasks = () => {
		let count = 0;
		todos.forEach((todo) => {
			if (!todo.completed) count++;
		});
		return count;
	};

	return (
		<div className='todolist-container'>
			<div className='todos-container'>
				<div>
					{todos.map((todo, index) => (
						<div
							className={`todo-item ${todo.completed && 'todo-item-active'}`}
							data-testid={'todo-component'}
							key={index}
						>
							<p
								data-testid={'todo-component-text'}
								onClick={() => updateTask(todo.id)}
							>
								{todo.task}
							</p>

							<button onClick={() => deleteTask(index)}>X</button>
						</div>
					))}
				</div>
			</div>
			<div>
				<TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
			</div>
		</div>
	);
}

export default TodoList;

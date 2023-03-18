import TodoForm from "./TodoForm";
import { useState } from "react";

function TodoList() {
	const [todos, todosSetter] = useState('');

	const submitHandler = todo => {
		const newTodos = [todo, ...todos];

		todosSetter(newTodos);
		console.log(newTodos);
	}

	return (
		<div className="todo-list-container">
			<header>
				<h1>What's on today's agenda?</h1>
			</header>
			<TodoForm onSubmit={submitHandler}/>
		</div>
	);
}

export default TodoList;
import { useEffect, useState } from "react";
import { NewTodoForm } from "./TodoForm";
import "./index.scss"
import { TodoList } from "./TodoList";

function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS")
		if (localValue == null) return []

		return JSON.parse(localValue)
	})

	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(todos))
	}, [todos])

	function addTodo(title) {
		setTodos(el => {
			return [...todos, { title, id: crypto.randomUUID(), comlited: false }
			]
		}
		)
	}

	function toggleTodo(id, comlited) {
		setTodos(todos => {
			return todos.map(el => {
				if (el.id === id) {
					return { ...el, comlited }
				}
				return el
			})
		})

	}
	function deleteTodos(id) {
		setTodos(todos => {
			return todos.filter(el => el.id !== id)
		})

	}

	return (
		<>
			<NewTodoForm onSubmit={addTodo} />
			<h1 className="Headline-todo">Todo List</h1>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos} />
		</>
	)
}

export default App;
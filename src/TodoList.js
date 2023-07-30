import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodos }) {
	return (
		<ul className="todo-list">
			{todos.length === 0 && "No Todos"}
			{todos.map(el => {
				return (
					<TodoItem
						{...el}
						key={el.id}
						toggleTodo={toggleTodo}
						deleteTodos={deleteTodos}
					/>
				)
			})}


		</ul>
	)
}
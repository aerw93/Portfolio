import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
	const [newItem, setNewItem] = useState("")

	function handleSubmit(e) {
		e.preventDefault();
		if (newItem === "") return

		onSubmit(newItem)

		setNewItem("")
	}
	return (
		<form
			onSubmit={handleSubmit}
			className="main-form">
			<div className="form-row">
				<label htmlFor="add-label">New Item</label>
				<input
					value={newItem}
					onChange={e => setNewItem(e.target.value)}

					type="text" id="add-label" />
				<button className="add-button">Add</button>
			</div>

		</form>
	)
}
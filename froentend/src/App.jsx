import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/todos")
			.then(async function (res) {
				const json = await res.json();
				setTodos(json.todos);
			})
			.catch(error => {
				console.error('Error fetching todos:', error);
			});
	}, []);

	return (
		<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#b3ccff"}}>
			<CreateTodo></CreateTodo>
			<Todos todos={todos}></Todos>
		</div>
	);
}

export default App;

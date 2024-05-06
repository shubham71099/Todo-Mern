import React, { useState, useEffect } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
	const [todos, setTodos] = useState([]);

	useEffect(() => {
        fetchTodos();
    }, []);

	const fetchTodos = async () => {
        try {
            const response = await fetch('http://localhost:3000/todos');
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }
            const data = await response.json();
            setTodos(data.todos);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to fetch todos');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
            });
            
            if (!response.ok) {
                throw new Error('Failed to create todo');
            }
            
            alert('Todo created successfully');
			fetchTodos();
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create todo');
        }
    };

    return (
        <div style={{
            backgroundColor:"#b3ccff", 
            padding:10,
            margin:20,
            textAlign:"center",
            borderRadius:"20px",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0 0 50px rgba(0, 0, 0, 0.4)",
        }}>
            <br/>
            <h2 style={{color:"darkblue"}}>Add a Todo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    style={{
                        padding: 10,
                        margin: 20,
                        width:300,
                        border:"none",
                        borderRadius:"10px",
                        fontSize:"15px"
                    }}
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input
                    style={{
                        padding: 10,
                        margin: 20,
                        width:300,
                        border:"none",
                        borderRadius:"10px",
                        fontSize:"15px"
                    }}
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <button
                    type="submit"
                    style={{
                        padding: 10,
                        margin: 5,
                        backgroundColor: "blue",
                        color: "white",
                        borderRadius: "20px",
                        width: 150,
                        transition: "background-color 0.1s ease-in-out",
                        cursor:"pointer",
                        border:"none",
                        fontFamily: "Arial, sans-serif",
                        fontSize:"16px"
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#00004d"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "blue"}
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}

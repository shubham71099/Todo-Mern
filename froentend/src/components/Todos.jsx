export function Todos({ todos }) {
	return (
		<div style={{
			backgroundColor:"#b3ccff", 
			padding:10,
			margin:20,
			textAlign:"center",
			borderRadius:"10px",
			fontFamily: "Arial, sans-serif",
			width:"50%"
			
			}}>
			{todos.map(function (todo,index) {
				return (
					<div key={index} style={{ 
						marginBottom: 20,
                        padding: 10,
                        borderRadius: 10,
                        boxShadow: "0 0 50px rgba(0, 0, 0, 0.3)",
					}}>
						<h2>{todo.title}</h2>
						<h3>{todo.description}</h3>
						<button style={{
							padding: 10,
							margin: 5,
							backgroundColor: "blue",
							color: "white",
							borderRadius: "20px",
							width: 180,
							transition: "background-color 0.1s ease-in-out",
							cursor:"pointer",
							border:"none",
							fontFamily: "Arial, sans-serif",
							fontSize:"16px"
						}}
						onMouseOver={(e) => e.target.style.backgroundColor = "#00004d"}
						onMouseOut={(e) => e.target.style.backgroundColor = "blue"}
						>
							{todo.completed == true
								? "Completed"
								: "Mark as Complete"}
						</button>
					</div>
				);
			})}
		</div>
	);
}

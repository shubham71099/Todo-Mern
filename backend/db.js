const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://shubham71099:245245245245@cluster0.d8orly2.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
	todo,
};

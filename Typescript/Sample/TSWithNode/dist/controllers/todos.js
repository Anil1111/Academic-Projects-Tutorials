"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
//avoid using (err: Error, req: Request, res: Response, next: NextFunction)
exports.createTodo = (req, res, next) => {
    const text = req.body.text; //typecasting as we know that it will be of type string
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
        message: "Created the todo",
        createTodo: newTodo,
    });
};
exports.getTodos = (req, res, next) => {
    res.status(200).json({ todos: TODOS });
};
exports.updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => {
        return todo.id === todoId;
    });
    console.log(todoIndex);
    if (todoIndex < 0) {
        throw new Error('could not find todo!');
    }
    TODOS[todoIndex].text = updatedText;
    res.status(200).json({
        message: "Updated the todo",
        updatedTodo: TODOS[todoIndex],
    });
};
exports.deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => {
        return todo.id === todoId;
    });
    console.log(todoIndex);
    if (todoIndex < 0) {
        throw new Error('could not find todo!');
    }
    console.log(todoIndex);
    TODOS.splice(todoIndex, 1);
    res.status(204).json({
        message: "Deleted the Todo"
    });
};

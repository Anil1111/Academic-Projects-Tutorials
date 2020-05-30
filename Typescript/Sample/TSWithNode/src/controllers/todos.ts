import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

//avoid using (err: Error, req: Request, res: Response, next: NextFunction)
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text; //typecasting as we know that it will be of type string
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  res.status(201).json({
    message: "Created the todo",
    createTodo: newTodo,
  });
};


export const getTodos: RequestHandler = (req,res,next) => {
  res.status(200).json({ todos: TODOS  });
}


export const updateTodo: RequestHandler<{ id: string}> = (req,res,next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text; 

  const todoIndex = TODOS.findIndex(todo => {
    return todo.id === todoId;
  });
  console.log(todoIndex);

  if(todoIndex < 0) {
    throw new Error('could not find todo!');
  }

  TODOS[todoIndex].text = updatedText;

  res.status(200).json({
    message: "Updated the todo",
    updatedTodo: TODOS[todoIndex],
  });
}

export const deleteTodo: RequestHandler = (req,res,next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex(todo => {
    return todo.id === todoId;
  });
  console.log(todoIndex);

  if(todoIndex < 0) {
    throw new Error('could not find todo!');
  }
  console.log(todoIndex);

  TODOS.splice(todoIndex,1);

  res.status(204).json({
    message: "Deleted the Todo"
  });
}

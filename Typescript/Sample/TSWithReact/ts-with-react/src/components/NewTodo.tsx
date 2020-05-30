import React, {useRef} from "react"; 
//useRef is a special hook in react that helps to implement certain functionalities
import './NewTodo.css';


type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);
  //ref is used to create a connection between submitHandler and input tag in html with initial value of null

  const todoSymitHandler = (event: React.FormEvent) => {
    event.preventDefault(); //as request to be handled in JS
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    //to call the onAddTodo method pointer received from app.tsx
    props.onAddTodo(enteredText);
  }

  return (
    <form onSubmit={todoSymitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;

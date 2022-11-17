import React, { useState, useRef } from "react";
import "./styles.css";

const Todos = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const inputElement = useRef();

  const addTodo = (event) => {
    if (event.key === "Enter" && inputText) {
      setTodoList([
        ...todoList,
        {
          id: todoList.length + 1,
          text: inputText
        }
      ]);
      inputElement.current.value = "";
      setInputText("");
    }
  };

  const deleteTodo = (item) => {
    let updatedTodos = todoList.filter((todo) => {
      if (todo.id !== item.id) {
        return todo;
      } else {
        return null;
      }
    });
    setTodoList(updatedTodos);
  };

  return (
    <div className="todos">
      <p className="heading">todos</p>
      <input
        ref={inputElement}
        className="todoInput"
        placeholder="Enter your todo"
        onKeyDown={addTodo}
        onChange={(event) => setInputText(event.target.value)}
      />
      <div className="todoList">
        {todoList.map((item) => (
          <div className="todoItem" key={item.id}>
            <p className="todoItemText">{item.text}</p>
            <p onClick={() => deleteTodo(item)} className="delete">
              x
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

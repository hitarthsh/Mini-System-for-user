import React from "react";
import { Fragment } from "react";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) => {
    const filtertodo = todos.filter((todos) => todos.id != id);
    settodos(filtertodo);
  };

  const rendertodos = todos.map((todo) => {
    return (
      <li
        style={{ color: todo.isCompleted ? "green" : "tomato" }}
        key={todo.id}
      >
        {" "}
        {todo.title} | {" "}
        <span onClick={() => DeleteHandler(todo.id)}>Delete</span>
      </li>
    );
  });

  return (
    <Fragment>
      <h1 style={{ color: "tomato" }}>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </Fragment>
  );
};

export default Read;

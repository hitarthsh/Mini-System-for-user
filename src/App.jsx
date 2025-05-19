import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kamm krle bhai", isCompleted: false },
  ]);

  const [title, settitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };

    // const copytodos = [...todos]
    // copytodos.push(newtodo)
    // settodos(copytodos);

    settodos([...todos, newtodo])
  }

  const rendertodos = todos.map(todo => {
    return <li key={todo.id}> {todo.title}</li>;
  });

  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <button>Create Todo</button>
      </form>
      <br />
      <hr />
      <h1>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </>
  );
};

export default App;

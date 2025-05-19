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

    console.log(newtodo);

  }
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
    </>
  );
};

export default App;

import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kamm krle bhai", isCompleted: false },
  ]);

  const [title, settitle] = useState("");

  return (
    <>
      <h1>Create Tasks</h1>
      <form>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <input type="checkbox" /> Completed
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </>
  );
};

export default App;

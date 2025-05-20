import { Fragment, useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const [title, settitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    const newtodo = {
      id: nanoid(),
      title: title.trim(),
      isCompleted: false,
    };

    settodos([...todos, newtodo]);
    settitle(""); // clear input after submission
  };

  const Cleardata = () => {
    settodos([]);
  };

  const buttoncss = {
    color: "white",
    padding: "5px 10px",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "50px 20px",
    fontSize: "15px",
    cursor: "pointer",
  };

  return (
    <Fragment>
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
        <button style={buttoncss} type="submit">
          Create Todo
        </button>{" "}
        |{" "}
        <button style={buttoncss} type="button" onClick={Cleardata}>
          All Clear Data
        </button>
      </form>
    </Fragment>
  );
};

export default Create;

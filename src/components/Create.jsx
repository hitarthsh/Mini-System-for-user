import { Fragment, useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: true,
    };

    settodos([...todos, newtodo]);
    // settitle(""); // clear input after submission
  };

  const [title, settitle] = useState("");

  const buttoncss = {
    color: "white",
    padding: "5px 10px",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "50px 20px",
    fontSize: "15px",
  };

  const Cleardata = () => {
    settodos([]);
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
        <button style={buttoncss}>Create Todo</button> |{" "}
        <button style={buttoncss} onClick={Cleardata}>
          All Clear Data
        </button>
      </form>
    </Fragment>
  );
};

export default Create;

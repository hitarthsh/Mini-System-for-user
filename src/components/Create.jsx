import { useState } from "react";
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

  return (
    <div className=" w-[60%] p-10">
      <h1 className="mb-10 text-5xl  ">
        Set <span className="text-red-400">Reminders</span> for <br /> tasks
      </h1>
      <form onSubmit={SubmitHandler}>
        <input
          className="p-4 border-b-2 w-full text5xl   outline-0"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <div className="flex gap-x-4 mt-5">
          <button
            className="mt-5 text-xl px-10 py-2 border rounded-3xl"
            type="submit"
          >
            Create Todo
          </button>
          <button
            className="mt-5 text-xl px-10 py-2 border rounded-3xl"
            type="button"
            onClick={Cleardata}
          >
            All Clear Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

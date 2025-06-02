import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper";

const Read = () => {
  const [todos, settodos] = useContext(todocontext);

  const DeleteHandler = (id) => {
    const filtertodo = todos.filter((todos) => todos.id != id);
    settodos(filtertodo);
    toast.info("Todo deleted successfully!");
  };

  const rendertodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="flex justify-between items-center p-4 bg-gray-900 rounded-2xl mb-5"
      >
        <span className="text-xl  ">{todo.title}</span>
        <button
          className="mb-5 mt-5 text-sm  "
          onClick={() => DeleteHandler(todo.id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className="w-[40%] p-10">
      <h1 className="mb-10 text-6xl  ">
        <span className="text-amber-500">Pending</span> Todos
      </h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;

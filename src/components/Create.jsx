import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper";

const Create = () => {
  const [todos, settodos] = useContext(todocontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
    data.isCompleted = false;
    data.id = nanoid();

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);
    toast.success("Nice! Todo has been created.");
    reset();
  };

  // console.log();

  const Cleardata = () => {
    settodos([]);
  };

  return (
    <div className=" w-[60%] p-10">
      <h1 className="mb-10 text-5xl  ">
        Set <span className="text-red-400">Reminders</span> for <br /> tasks
      </h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
          {...register("title", { required: "title can not be empty" })}
          className="p-4 border-b-2 border-solid w-full text5xl outline-0  "
          type="text"
          placeholder="title"
        />
        {/* {errors && errors.title && errors.title.message && (
          <small>{errors.title.message}</small>
        )} */}

        <small className="font-thin text-2xl flex justify-center items-center text-red-500">
          {errors?.title?.message}
        </small>
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

import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kamm krle bhai", isCompleted: false },
  ]);

  const [title, settitle] = useState("");
  const [completed, setcompleted] = useState(false)
  const [gender, setgender] = useState("male")
  const [city, setcity] = useState("mumbai")

  return (
    <>
      <h1>Create Tasks</h1>
      <form>
        <input
          onChange={(e) => console.log(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <input
          checked={completed}
          onChange={(e) => setcompleted(e.target.checked)}
          type="checkbox"
        />{" "}
        Completed
        <br /><br />
        <input value="Male" onChange={(e) => setgender(e.target.value)} checked={gender == "male" && true} type="radio" />
        male
        <input value="Female" onChange={(e) => setgender(e.target.value)} checked={gender == "Female" && true} type="radio" />
        Female
        <br />
        <select value={city} onChange={(e) => setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </>
  );
};

export default App;

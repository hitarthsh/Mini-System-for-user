import React, { useState } from "react";

const Create = (props) => {
  // State for managing user input
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState(18);

  // Handle form submission to add a new user
  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { name: fullname, age: Number(age) };

    // Update the parent component's user list
    props.setusers((prevUsers) => [...prevUsers, newUser]);

    // Clear input fields after submission
    setFullname("");
    setAge(18);
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;

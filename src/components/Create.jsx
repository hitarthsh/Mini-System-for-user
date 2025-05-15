import React, { useState } from "react";

const Create = (props) => {
//   console.log(props);

  // State to manage the input for new user registration
  const [fullname, setfullname] = useState(""); // Full name of the new user
  const [age, setage] = useState(18); // Age of the new user

  // Handler for form submission
  const SubmitHandler = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    const newuser = { fullname, age }; // Create a new user object
    console.log(newuser); // Log the new user to the console (for debugging)

    // set the user in the setusers
    // Optional: Add the new user to the list
    // setUsers([...users, newuser]);

    // Clear input fields after submission
    setfullname("");
    setage(18);
  };

  return (
    <div>
      {/* Form for registering a new user */}
      <h1>Register User</h1>
      <form onSubmit={SubmitHandler}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(e) => setage(e.target.value)}
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

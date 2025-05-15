import React, { useState } from "react";

const App = () => {
  // State to store a list of users
  const [users, setUsers] = useState([
    { name: "john", age: 12 },
    { name: "Ankur", age: 32 },
    { name: "Ayush", age: 22 },
  ]);

  // Generate a list of user names to display
  const renderUsers = users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ));

  // State to manage the input for new user registration
  const [fullname, setfullname] = useState(""); // Full name of the new user
  const [age, setage] = useState(18); // Age of the new user

  // Handler for form submission
  const SubmitHandler = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    const newuser = { fullname, age }; // Create a new user object
    console.log(newuser); // Log the new user to the console (for debugging)

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

      <hr />

      {/* Display the list of registered users */}
      <h1>User Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  // State to store the list of registered users
  const [users, setUsers] = useState([
    { name: "john", age: 12 },
    { name: "Ankur", age: 32 },
    { name: "Ayush", age: 22 },
  ]);

  return (
    <div>
      {/* Form to add new users */}
      <Create setusers={setUsers} />

      {/* Component to display the list of users */}
      <Read user={users} setusers={setUsers} />
    </div>
  );
};

export default App;

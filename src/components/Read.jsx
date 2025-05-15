import React from "react";

const Read = (props) => {
  const users = props.user;
//   const setUsers = props.setusers; // Consistent camelCase naming
//   console.log(props);

  // Generate a list of user names to display
  const renderUsers = users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ));

  return (
    <div>
      {/* Display the list of registered users */}
      <h1>User Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default Read;

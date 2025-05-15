import React from "react";

const Read = (props) => {
  // Extract the user list from props
  const users = props.user;

  // Generate the list of user names
  const renderUsers = users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ));

  return (
    <div>
      <h1>User Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default Read;

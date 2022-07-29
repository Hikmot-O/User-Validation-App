import React, { useState } from "react";

import UserInput from "./components/UserInput/UserInput";
import UserDataList from "./components/UserDataList/UserDataList";

function App() {
  const [USER_DATA, setUSER_DATA] = useState([]);

  const addUserHandler = (newUser) =>{
    setUSER_DATA((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  }

  return (
    <div>
      <UserInput onAddUser={addUserHandler}></UserInput>
      <UserDataList users={USER_DATA}></UserDataList> 
    </div>
  );
}

export default App;

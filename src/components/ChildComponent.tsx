import React, { useContext } from "react";
import { UserContext } from "./UseContext";

const ChildComponent = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);
  if (userContext) {
    console.log(userContext.userList);
  }
  return (
    <div>
      {userContext?.userList.map((u, index) => (
        <p key={index}>
          Name: {u.name} and Age: {u.age}
        </p>
      ))}
    </div>
  );
};

export default ChildComponent;

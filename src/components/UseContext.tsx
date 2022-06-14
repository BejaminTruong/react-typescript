import React, { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";

export type UserProps = {
  name: string;
  age: number;
};
export type UserListState = {
  userList: UserProps[] | [];
  setUserList: React.Dispatch<React.SetStateAction<UserProps[] | []>>;
};
export const UserContext = createContext<UserListState | null>(null);
const UseContext = () => {
  const [userList, setUserList] = useState<UserProps[] | []>([
    { name: "Ben", age: 21 },
  ]);
  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      <ChildComponent />
    </UserContext.Provider>
  );
};

export default UseContext;

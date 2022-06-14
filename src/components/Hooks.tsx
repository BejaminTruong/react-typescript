import React, { useEffect, useState } from "react";

type UserProps = {
  name: string;
  age: number;
};

const Hooks = () => {
  // const [user, setUser] = useState<UserProps | null>(null);
  //const [user, setUser] = React.useState<IUser>({} as IUser);
  const mainRef = React.useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(mainRef); // {current: "div"}
  }, []);

  return (
    <div ref={mainRef}>
      <p>{/* {user?.name} {user?.age} */}</p>
    </div>
  );
};

export default Hooks;

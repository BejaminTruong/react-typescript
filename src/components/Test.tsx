import { FC } from "react";

type Props = {
  name?: string;
  age?: number;
};

// interface Props {
//     name: string;
//     age: number;
// };

const Test: FC<Props> = ({ name, age }) => {
  return (
    <h2>
      My name is {name} and I am {age} years old
    </h2>
  );
};

export default Test;

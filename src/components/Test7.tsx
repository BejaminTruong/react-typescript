import React from "react";

type Props = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Test7 = ({ handleChange, handleClick, value }: Props) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={(event) => handleClick(event, 1)}>Click</button>
    </div>
  );
};

export default Test7;

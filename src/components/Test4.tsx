type Props = {
  status: "loading" | "success" | "error";
};

const Test4 = (props: Props) => {
  return <h1>Status - {props.status}</h1>;
};

export default Test4;

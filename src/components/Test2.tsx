type Props = {
  calculate: (a: number, b: number) => number;
  hello: (msg: string) => void;
  doSomething: (params: any) => any;
};

const Test2 = ({ calculate, hello, doSomething }: Props) => {
  let result = calculate(2, 3);
  hello("Binh");
  doSomething("Anh");
  return <p>{result}</p>;
};

export default Test2;

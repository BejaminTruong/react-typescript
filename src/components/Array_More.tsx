const Array_More = () => {
  let strArr: string[] = [];
  strArr.push("Ben"); // No error
  let readOnlyStrArr: readonly string[] = ["Daniel"];
  //readOnlyStrArr.push("Mary"); // Error
  let numArr: number[] = [1, 2, 3];
  numArr.push(4); // No error
  //numArr.push("4"); // Error
  let newNum: number = numArr[0]; // No error
  //tuples
  let tuple: [number, string, boolean] = [1, "1", true];
  tuple.push(9); // No Error
  //let tuple2: [number, string, boolean] = [1, true, "1"]; // Error bởi vì sai thứ tự khai báo
  let readOnlyTuple: readonly [number, string, boolean] = [2, "2", false];
  //readOnlyTuple.push(2) // Error
  return <div>Array_More</div>;
};

export default Array_More;

const Array_Object = () => {
  let numArr: number[] = [1, 2, 3, 4, 5];
  let strArr: string[] = new Array("Ben", "John", "Mary", "Jack");
  let objArr: object[] = [
    { name: "Ben", age: 20 },
    { name: "John", age: 19 },
    { name: "Mary", age: 18 },
  ];
  let newObjArr: { name: string; age: number }[] = [
    { name: "Mary", age: 18 },
    { name: "Ken", age: 15 },
    { name: "Tina", age: 5 },
  ];
  // for loop thường
  for (let index: number = 0; index < numArr.length; index++) {
    const element = numArr[index];
    console.log(element * 2); // Kết quả: 0, 2, 4, 6, 8, 10
  }
  // for in loop
  for (const key in objArr) {
    const element = objArr[key];
    console.log(element); // Kết quả: "Ben", "John", "Mary", "Jack"
  }
  return (
    <div>
      {strArr.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
    </div>
  );
};

export default Array_Object;

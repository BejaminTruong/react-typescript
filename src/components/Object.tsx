const Object = () => {
  const car: { type: string; model: string; year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
  };
  car.type = "Ford"; // no error
  //car.type = 2; // Error: sai kiểu dữ liệu khai báo

  //   const obj: { type: string; mileage: number } = {
  //     type: "Toyota",
  //   };
  //obj.mileage = 2000;
  //=> Error: không tạo đủ các thuộc tính được khai báo
  // Cách khắc phục:         mileage?: number

  const nameAgeMap: { [index: string]: number } = {};
  nameAgeMap.Jack = 25; // no error
  //nameAgeMap.Mark = "Fifty"; // Error: sai kiểu dữ liệu khai báo
  //=> [index: string]: number có thể dùng khi object không có thuộc tính cố định
  //=> "index" có thể thay bằng bất cứ từ gì cũng được
  return <div>Object</div>;
};

export default Object;

import "./App.css";
import { FC } from "react";
// import Test from "./components/Test";
// import Test2 from "./components/Test2";
// import Test3 from "./components/Test3";
// import Test4 from "./components/Test4";
// import Test5 from "./components/Test5";
// import Test6 from "./components/Test6";
// import Test7 from "./components/Test7";
// import Test8 from "./components/Test8";
// import Array_Object from "./components/Array_Object";
// import Hooks from "./components/Hooks";
// import UseContext from "./components/UseContext";
// import UseReducer from "./components/UseReducer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
const App: FC = () => {
  // const calculate = (a: number, b: number) => {
  //   return a * b;
  // };
  // const hello = (msg: string) => {
  //   console.log(msg);
  // };
  // const fullName = {
  //   firstname: "Ben",
  //   lastname: "Jamin",
  // };
  // const parentNames = [
  //   {
  //     firstname: "John",
  //     lastname: "Wick",
  //   },
  //   {
  //     firstname: "Maria",
  //     lastname: "Monroe",
  //   },
  // ];

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about">
            <Route index element={<About />} />
            <Route path=":id" element={<About />} />
          </Route>
          <Route path="layout" element={<Layout />}>
            <Route index element={<About />} />
            <Route path=":id" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <Test />
      <Test2 calculate={calculate} hello={hello} doSomething={hello} />
      <Test3 fullName={fullName} parentNames={parentNames} />
      <Test4 status="loading" />
      <Test5>This is a child</Test5>
      <Test6>
        <Test5>This is a child of a child</Test5>
      </Test6>
      <Test7
        handleChange={(event) => console.log(event)}
        value=""
        handleClick={(event, id) => console.log("Button clicked", event, id)}
      />
      <Test8
        styles={{ backgroundColor: "red", margin: "auto", maxWidth: "500px" }}
      />
      <Array_Object />
      <Hooks />
      <UseContext />
      <UseReducer /> */}
    </div>
  );
};

export default App;

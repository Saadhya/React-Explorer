import "./App.css";
import ProductItem from "./components/ProductItem";
import Counter from "./components/Counter";
import BgChanger from "./components/BgChanger";

function App() {
 
  const myobj = {
    name: "krish",
    age: 20,
  };
  let newArr=[
    1,2,3
  ]
  // gap analysis-yogesh
  return (
    <>
    <BgChanger/>
      {/* <Counter/>
      <ProductItem name={myobj.name} someObj={newArr} />
      <ProductItem name={myobj.name} btnText="click me"/> */}
    </>
  );
}

export default App;

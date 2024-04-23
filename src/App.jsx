import "./App.css";
import Button from "./Button";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    console.log("search", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("count");
  }, [counter]);

  return (
    <>
      <input value={keyword} onChange={onChange} placeholder="search here" />
      <div>{counter}</div>
      <button onClick={onClick}>Click me</button>
      <Button text="Hi" />
    </>
  );
}

export default App;

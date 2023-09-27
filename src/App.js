import Button from "./Button";
import Input from "./Input";
import './App.css';
// import React from "react";
import { useState, useEffect } from "react";
// import styles from "./App.css";

function App() {

  let [counter, setCounter] = useState(0);
  let [name, setName] = useState("");

  const onChange = (event) => {
    setName(name = event.target.value);
  }
  const onClick = () => {
    setCounter(counter + 1);
  }
  const callOnce = () => {
    console.log("call once only");
  }
  useEffect(() => console.log("입력한 이름: " + name), [name,counter]);
  useEffect(callOnce, []); // 생성시에 한번만 호출
  useEffect(() => console.log("state가 변경됨"), [counter]); // state값이 변할때마다 호출
  useEffect(() => console.log("페이지가 렌더링됨"));
  return (
    <div>
       <h1>Functional Component</h1>
       <p>{counter} Clicked</p>
       <Button onClick={onClick}/><br />
       <Input onChange={onChange} type="text" value={name}/>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

function Image() {
    function createFunc() {
        console.log("이미지가 생성됨");
        destroyFunc();
    }
    function destroyFunc() {
        console.log("이미지가 소멸됨");
    }

    useEffect(createFunc, []);
    return (
        <img src="./react.png" alt="로고"></img>
    )
}

function App2() {
    let [toggle, setToggle] = useState(false);
    const onClick = () => {
        setToggle(cur => !cur);
    }

    return ( 
        <div>
            <h1>Functional Component</h1>
            {toggle ? <Image /> : null }
            <button onClick={onClick}>{toggle ? "hide" : "show"}</button>
        </div>
    );
}

export default App2;
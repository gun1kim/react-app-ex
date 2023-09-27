import { useEffect } from "react";

function App3() {
    const getData = async () => {
        const response = await fetch("http://localhost:3001/posts");
        const json = await response.json();
        console.log(json);
    }
    // useEffect(() => {
    //     fetch("http://localhost:3001/posts")
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // }, []);  
    useEffect(() => getData(), []);
}
export default App3;
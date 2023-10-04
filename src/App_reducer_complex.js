// import { useState, useReducer } from "react";

// const initialState = {
//     input: "",
//     todos: [

//     ]
// }

// const reducer = (state, action) => {
//     console.log("reducer 호출", state, action);
//     switch(action.type) {
//         case "changeInput":
//             return {
//                 ...state,
//                 input: action.payload
//             };
//         case "add":
//             return {
//                 ...state,
//                 todos: [...state.todos, action.todo],
//                 input: ""
//             };
//         default: 
//             return state;
//     }
// }

// function App_reducer_complex() {
    
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const {todos, input, id} = state;
//     console.log(state);
//     const onChange = (e) => {
//         dispatch({ 
//             type: "changeInput", 
//             payload: e.target.value
//         })
//     }
//     const add = () => {
//         dispatch({
//             type: "add",
//             todo: { text: input, isFinished:false}
//         })
//     }

//     return (
//         <div>
//             <h2>Todolist - reducer</h2>
//             <p>총 todolist 수 : {todos.length}</p>
//             <input type="text"
            
//             onChange={onChange}
//             placeholder="할일을 입력해주세요" />
//             <button onClick={() => {dispatch({type: "add", todo: {text: input, isFinished: false}})}}>ADD</button>
//             <ul>
//                 {todos.map((todo) => {
//                     <li key={todo.id}><span>{todo.text}</span></li>
//                 })}
//             </ul>
//         </div>
//     )
// }

// export default App_reducer_complex;

import { useState, useReducer } from "react";
import ACTION_TYPES from "./ACTION_TYPES";
import Todo from "./Todo_reducer";

const reducer = (state, action) => {
    console.log("reducer 호출", state, action);
    switch(action.type) {
        case ACTION_TYPES.add:
            const newTodo = {
                id: Date.now(),
                todo: action.payload.todo,
                completed: false
            }       
            return {
                count : state.count + 1,
                todoList: [...state.todoList, newTodo]
            };
        case ACTION_TYPES.del:
            return {
                count: state.count - 1,
                todoList: state.todoList.filter( todos => 
                    (todos.id !== action.payload.id)
                )};
        case ACTION_TYPES.completed:
            return {
                count: state.count,
                todoList: state.todoList.map( todos => {
                    if(todos.id === action.payload.id) {
                        return {...todos, completed: !todos.completed}
                    }
                    return todos;
                })
            };
        default: 
            return state;
    }
}

const initialState = {
    count : 0, 
    todoList: []
}


function App_reducer_complex() {
    
    const [todo, setTodo] = useState("");
    const [todoListInfo, dispatch] = useReducer(reducer, initialState);
    const onChange = (e) => {
        {setTodo(e.target.value)}
    }

    return (
        <div>
            <h2>Todolist - reducer</h2>
            <p>총 todolist 수 : {todoListInfo.count}</p>
            <input type="text"
            
            onChange={onChange}
            placeholder="할일을 입력해주세요" />
            <button onClick={() => 
                {dispatch({type: ACTION_TYPES.add, payload: {todo}})}}>ADD</button>
            {todoListInfo.todoList.map(todos => {
                return <Todo 
                key = {todos.id}
                todo = {todos.todo}
                dispatch = {dispatch}
                id = {todos.id}
                completed = {todos.completed}/>
            })}
        </div>
    )
}

export default App_reducer_complex;
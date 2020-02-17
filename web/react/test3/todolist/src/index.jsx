import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import TodoList from "./TodoList";

const destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList></TodoList>
    </div>,
    destination
);
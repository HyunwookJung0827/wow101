import React from "react";

const Todo = ({ todo }) => {
  return (
    <>
      <div className={todo.completed ? "bg-blue-400" : "bg-red-400"}>
        <p>ID: {todo.id}</p>
        <p>Title: {todo.title}</p>
        <p>Completed? {todo.completed ? "True!" : "False..."}</p>
      </div>
    </>
  );
};

export default Todo;

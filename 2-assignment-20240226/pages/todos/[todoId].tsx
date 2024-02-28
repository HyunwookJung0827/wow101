import Todo from "@/components/Todo";
import React from "react";

const TodoDetail = ({ todo }) => {
  return (
    <>
      <div>TodoDetail</div>
      <Todo todo={todo} />
    </>
  );
};

export default TodoDetail;

export async function getServerSideProps(context) {
  const { params } = context;
  const { todoId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const data = await response.json();
  return {
    props: { todo: data },
  };
}

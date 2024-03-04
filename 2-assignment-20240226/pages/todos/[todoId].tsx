import Todo from "@/components/Todo";
import React from "react";
import Head from "next/head";

const TodoDetail = ({ todo }) => {
  
  return (
    <>
      <Head>
        <title>{todo.title.length <= 20 ? todo.title : todo.title.slice(0, 19) + '...'} | My Custom website</title>
      </Head>
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

import Todo from "@/components/Todo";
import { TodoProps } from "@/components/Todo";
import React from "react";
import Head from "next/head";

const TodoDetail: React.FC<TodoProps> = ({ todo }) => {
  return (
    <>
      <Head>
        
        <title>
          {todo.title.length <= 20
            ? todo.title
            : todo.title.slice(0, 19) + "..."}{" "}
          | My Custom website
        </title>
        <meta
          name="description"
          content={"Check out this Todo: " + todo.title}
          key="desc"
        />
        <meta property="og:title" content={todo.title} key="ogtitle" />
        <meta
          property="og:description"
          content={"Check out this Todo: " + todo.title}
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://i.pinimg.com/736x/5c/40/7d/5c407d312f18665cd7e1c9bfd6711cea.jpg"
          key="ogimage"
        />
      </Head>
      <div>TodoDetail</div>
      <Todo todo={todo} />
    </>
  );
};

export default TodoDetail;

export async function getServerSideProps(context: { params: any; }) {
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

import User from "@/components/user";
import React from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
const UserList = ({ users }: { users: User[] }) => {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user: User) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default UserList;
export async function getStaticProps() {
  // convention is to return an object with a props key
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}

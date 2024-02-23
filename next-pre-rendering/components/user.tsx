import React from "react";
export interface User {
  id: number;
  name: string;
  email: string;
}
export interface UserProps {
  user: User;
}
const UserDetail = ({ user }: UserProps) => {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
};

export default UserDetail;

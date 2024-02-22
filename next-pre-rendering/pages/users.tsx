import React from 'react'
interface User {
  id: number,
  name: string,
  email: string
}
const UserList = ({users}: User[]) => {
  return <><h1>List of users</h1>
  {
    users.map((user: User) => {
      return (<div key={user.id}>
        <p>{user.name}</p>
        <p>{user.email}</p>

      </div>)
    })
  }</>
    
  
}

export default UserList
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data
    }
  }
}
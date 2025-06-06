import React, { useState, useEffect } from "react";
export default function List() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.results);
      });
  }, []);
  return(
    <>
    {users?.map((user,index)=>(
        <ul key={index}>
            <li>Title: {user.name.title}</li>
            <li>FirstName: {user.name.first}</li>
            <li>LastName: {user.name.last}</li>
            <li>City: {user.location.city}</li>
            <li>Email: {user.email}</li>
            <li>Gender: {user.gender}</li>
        </ul>

    ))}
    </>
  )
}

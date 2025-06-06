import React,{useState,useEffect} from "react";
export default function Div(){
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
        .then((res)=>res.json())
        .then((data )=> {
            console.log(data);
            setUsers(data.results);
        })
    },[]);
    return(
        <>
        {users?.map((user,index)=>(
                <div key={index} style={{backgroundColor:"red"}}>
                    <h2>{user.name.first} {user.name.last}</h2>
                    <h3>{user.email}</h3>
                    <h3>{user.gender}</h3>
                    <h3>{user.location.city}</h3>
                </div>
            ))
        }
        </>
    );
}
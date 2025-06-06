import React,{useState,useEffect} from "react";
export default function Table(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=10")
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            setUsers(data.results);
        })
    },[])
    return (
        <table style={{border:"1px solid white", borderCollapse:"collapse"}}>
            <thead>
                <tr>
                    <th style={{border:"1px solid white"}}>Title</th>
                    <th style={{border:"1px solid white"}}>First Name</th>
                    <th style={{border:"1px solid white"}}>Last Name</th>
                    <th style={{border:"1px solid white"}}>Email</th>
                    <th style={{border:"1px solid white"}}>Location</th>
                    <th style={{border:"1px solid white"}}>Gender</th>
                </tr>
            </thead>
            <tbody style={{border:"1px solid white"}}>
                {users.map((user,index)=>(
                    <tr key={index} >
                        <td style={{border:"1px solid white"}}>{user.name.title}</td>
                        <td style={{border:"1px solid white"}}>{user.name.first}</td>
                        <td style={{border:"1px solid white"}}>{user.name.last}</td>
                        <td style={{border:"1px solid white"}}>{user.email}</td>
                        <td style={{border:"1px solid white"}}>{user.location.city}</td>
                        <td style={{border:"1px solid white"}}>{user.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
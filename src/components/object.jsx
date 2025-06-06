import React,{useState} from "react";
export default function Object(){
    const [stu,setStu] = useState({
        name : "",
        age : 0,
    });
    let [input,setInput] = useState("");
    const handlechange = ()=>{
        if(input.trim()!==""){
            setStu({...stu,name: input});
            setInput("");
        }
    }
    return(
        <>
        <h2>{stu.name}</h2>
        <h3>{stu.age}</h3>
        <input type="text" placeholder="enter name here" id="name" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button id="add" onClick={handlechange}>Update Name</button><br/><br/>
        <button id="add" onClick={()=>setStu({...stu,age:stu.age+1})}>Increase Age</button><br/><br/>
        </>
    )
}
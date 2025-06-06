import React,{useState} from "react";
export default function Counter(){
    const [count,setCount] = useState(0);
    return(
        <>
        <h2>{count}</h2>
        <button id="increase" onClick={()=>setCount(count+1)}>+</button>
        <button id="reset" onClick={()=>setCount(0)}>Reset</button>
        <button id="decrease" onClick={()=>{
            if(count>0)
            setCount(count-1)}} >-</button>
        </>
    )
}
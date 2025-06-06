import React,{useState} from "react";
export default function Toogle(){
    const [name,setName] = useState("");
    const [input,setInput] = useState("");
    const [ison,setIson] = useState(true);
    const handlesubmit = () =>{
        if(input.trim() !== ""){
            setName(input);
            setInput("");
            setIson(!ison);
        }
        
    }
    
    return(
        <>
        <label for="st1">
            <input type="text" id="st1" placeholder="enter here" onChange={(e)=>setInput(e.target.value)}/>
        </label>
        <p>{name}</p>
        <button id="update" onClick={handlesubmit}>Update</button>
        <button id="tog">{ison?"on":"off"}</button>
        </>
    )
}
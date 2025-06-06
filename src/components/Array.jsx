import React,{useState} from "react";
export default function Array(){
    const [ele,setEle] = useState([]);
    const [input,setInput] = useState("");
    const [value,setValue] = useState("");
    const [index,setIndex] = useState("");
    const [uvalue,setUvalue] = useState("");
    const handleAdd = ()=>{
        if(input.trim()!==""){
            setEle([...ele,input]);
            setInput("");
        }
    }
    const handleDel = () =>{
        let num = parseInt(value);
        if(!isNaN(num) && num>=0 && num < ele.length){
            const newarr = [...ele];
            newarr.splice(num,1);
            setEle(newarr);
            
        }else{
            alert("invalid index");
        }
        setValue("");
    }
    const handleChange = () =>{
        let num = parseInt(index);
        if(!isNaN(num) && num>=0 && num < ele.length && uvalue.trim()!==''){
            let newarr = [...ele];
            newarr[index] = uvalue;
            setEle(newarr);
            setUvalue("");
            setIndex("");
        }else{
            alert("invalid index or value is empty");
            setUvalue("");
            setIndex("");
        }
    }
    return(
        <>
        <h3>Array Elements: [{ele.join(", ")}]</h3>
        <input type="text"  value={input} placeholder=" enter number here" onChange={(e)=>setInput(e.target.value)}/>
        <button id="Add" onClick={handleAdd}>Add</button><br/><br/>
        <input type="text"  value={value} placeholder=" enter index to delete here" onChange={(e)=>setValue(e.target.value)}/>
        <button id="dle" onClick={handleDel}>Delete</button><br/><br/>
        <input type="text"  value={index} placeholder=" enter index to update here" onChange={(e)=>setIndex(e.target.value)}/>
        <input type="text"  value={uvalue} placeholder=" enter value to update here" onChange={(e)=>setUvalue(e.target.value)}/>
        <button id="update" onClick={handleChange}>Update</button>
        </>
    )
}

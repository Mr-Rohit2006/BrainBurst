import { useState } from "react";
import React from "react";
export default function FeedbackForm(){
    const [formdata,setformdata] = useState({
        name :"",
        department:"",
        feedback:"",
        rating:""
    });
    const [submitteddata,setSubmitteddata] = useState([]);
    const [error,setError] = useState("");
    const handlechange =(e)=>{
        const {name,value} = e.target;
        setformdata((prevdata)=>({
            ...prevdata,[name]:value,
        }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!formdata.name||!formdata.department||!formdata.feedback||!formdata.rating){
            setError("fill all the field");
            return;
        }
        setError("");
        setSubmitteddata([...submitteddata,formdata]);
        setformdata({
            name :"",
            department:"", 
            feedback:"",
            rating:""
        })
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name:</label>
            <input type="text" placeholder="Enter name here" name="name" value={formdata.name} onChange={handlechange}/>
            </div>
            <div>
                <label>Department:</label>
                <select name="department" value={formdata.department} onChange={handlechange}>
                    <option value="">Select department</option>
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                </select>
            </div>
            <div>
                <label>Feedback:</label>
                <textarea name="feedback" value={formdata.feedback} onChange={handlechange}></textarea>
            </div>
           <div>
            <label>Rating:</label>
            {[1,2,3,4,5].map((num) => (
                <label key={num}>
                    <input type="radio" name="rating" value={num} checked={formdata.rating===String(num)} onChange={handlechange}/>{num}
                </label>
            ))}
           </div>
           <button type="submit">Submit</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
        {
            submitteddata.length>0 &&(
            <>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Feedback</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                            submitteddata.map((num,index)=>(
                                <tr key={index}>
                                    <td>{num.name}</td>
                                    <td>{num.department}</td>
                                    <td>{num.feedback}</td>
                                    <td>{num.rating}</td>
                                </tr>
                            ))
                            }
                            
                        
                    </tbody>
                </table>
            </>
            )
        }
        </>
    )
}
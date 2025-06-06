import React,{useState} from 'react';
import Quizp from './Quizp.jsx';
export default function QuizApp(){
    let [name,setName] = useState("");
    const [submitted,setSubmitted] =useState(false);
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(name){
            setSubmitted(true);
        }

    }
    const resetQuiz = () => {
    setName("");
    setSubmitted(false);
  };
    return(
        <>
        { submitted===false?(
         <form onSubmit={handlesubmit}>
         <input type="text" name="name" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
         <button type="submit">Submit</button>
         </form>
        ):(
            <Quizp name={name} onRetake={resetQuiz} />
        )
    } 
        </>
        
    )
}
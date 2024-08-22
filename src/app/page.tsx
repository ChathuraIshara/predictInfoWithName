"use client"
import { useState,FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputVal,setInputVal]=useState("");
  const {push}=useRouter();

  const handleSubmit=(event:FormEvent)=>
  {
    event.preventDefault(); 
    push(`/prediction/${inputVal}`)

  }
  return (
    <main className="flex min-h-screen items-center bg-slate-200 justify-center">
     <div className="bg-white rounded-md  p-5">
     <div className="p-5">
        <h1 className="text-3xl font-bold">Enter Your Name</h1>
      </div>
      <div className="px-3">
      <form onSubmit={handleSubmit}>
        <input className="text-gray-500 p-2 border rounded-md m-2 w-full" type="text" placeholder="Type your name..." value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}}></input><br></br>
        <button className="bg-blue-500 rounded-md m-2 p-2 text-white w-full" type="submit">Predict Data</button>
      </form>

      </div>
     
      
     </div>
    
    </main>
  );
} 

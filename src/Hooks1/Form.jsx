import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [email,setEmail]=useState()
    const [name,setName]=useState()
    const [age ,setAge]=useState()



    const handleform=(e)=>{
        e.preventDefault()
        alert("form submitted")
        console.log("name:",name);
        console.log("email:",email);
       
        
    setEmail('')
    setName('') 
    setAge('')
    }
    
  return (
    <div>
       <form className='box'>
        <input type="text" placeholder="enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)
}
        >
        </input>
        <br/>
        <input type="number" placeholder="enter your age"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        ></input>
        <br/>
        <input type="email" placeholder="enter your email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        ></input>
        <br/>
        <button className='btn' onClick={handleform} type="button">submit</button>
       </form>

    </div>
  )
}

export default Form
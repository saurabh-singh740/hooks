import React, { useState } from "react"
import { useRef } from "react"
const Unmount =() =>{

    const[val,setVal]=useState('')

    const refelem=useRef(0)
    console.log(refelem.current)

    const change =(e)=>{
        setVal(e.target.value)
        refelem.current=refelem.current+1;
    }
    return (
        <div>
            <input type="text" value={val} onChange={change}/>
            <h1>{refelem.current}</h1>
           
        </div>
    )
}

export default Unmount;
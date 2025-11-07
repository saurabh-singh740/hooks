import React from 'react'
import { useState } from 'react';

const Hooksuse = () => {
    const [state,setState]=useState(0);


    const increases=()=>{
        setState(state+1)
    }
  return (
    <div>
        <div>
            <h1>{state}</h1>
            <button onClick={increases}>click here</button>

        </div>
    </div>
  )
}

export default Hooksuse
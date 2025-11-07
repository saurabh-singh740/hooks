import React, { useEffect, useState } from 'react'

const Hooksuse2 = () => {
  const[age,setAge]=useState(10)
  const increaseage=()=>{
    setAge(age+1)
  }

  useEffect(()=>{
    setAge(age)
    
  },[age])
  return (
    <div>
      <h1>{age}</h1>
      <button onClick={increaseage}>increase</button>

    </div>
  )
}

export default Hooksuse2
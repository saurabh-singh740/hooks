import React, { useState } from 'react'
import Usestate from './Hooks1/Hooksuse.jsx';
import Form from './Hooks1/Form.jsx';
import Hooksuse2 from './Hooks1/Hooksuse2.jsx';
import Usetoggle from './Customhooks.jsx';
const App = () => {
  const [data,toggle]=Usetoggle()
  return (
    <div>
        {/* <Usestate/> */}
      {/* <Form/> */}
      {/* <Hooksuse2/> */}
      <h1>{data ? "visible":"sudhar ja bsdk"}</h1>
      <button onClick={toggle}>click here</button>

    </div>
  )
}

export default App
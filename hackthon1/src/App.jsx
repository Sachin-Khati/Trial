import React from 'react'
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className="bg-amber-950">hello</h1>
   <button className="bg-blue-500">Button A</button>
   <button className="bg-red-500">Buttonn B</button>
   </>
     
  )
}

export default App

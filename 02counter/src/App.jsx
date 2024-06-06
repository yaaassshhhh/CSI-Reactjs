import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let counter = count;
  function addValue() {
    setCount(count + 1)
  }

  function subValue() {
    setCount(count - 1)
  }

  useEffect(()=>{
    console.log("useEffect called");
    console.log("Count Value changed: ",count);
    return () => {
      console.log("Clean up function is called");
    }
  },[count]);
  //useEffect first runs the code on mount and then runs the code whenever the value of count changes , whenever something in the dependency array changes the useEffect is called and it first runs the return function and then the code inside the useEffect;
  // the clean up function is also called when the component dismounts; 

  return (
    <>
      <h1>
       Counter Project
      </h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={subValue}>Subtract Value</button>
    </>
  )
}

export default App

//Reconciliation is an algorithm that React uses to differentiate between two trees (mainDOM and reactDOM) to determine which parts to change.Reconciliation is the algorithm behind what is popularly known as the "virtual DOM";
//React Fiber is a ground-up rewrite of the reconciler;
//some components are not compared bcoz comparing the changes in them makes no sense and hence the whole component is re-rendered;
//diffing of lists is performed using keys. Keys should be "stable , predictable and unique";
 
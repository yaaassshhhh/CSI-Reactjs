import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  //to pass any kind of value to the component we use props for conditional/preferred rendering
  //just like shown below
  //this can be recieved in the component as props.variable
  //or we can directly destructure the props object to get the variable
  const myArr = [1, 2, 3, 4, 5]
  return (
    <>
    
      <h2>Hello World</h2>
      <Card creatorName = 'Yash' someObj = {{
        key1: 'value1',
        key2: 'value2'
      }}
      variable = {myArr} />
      <Card />

    </>
  )
}

export default App

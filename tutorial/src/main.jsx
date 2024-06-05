import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (<div>
      <h1>Chai pe Charcha</h1>
  </div>)
}
const anotherUser = "Yash";

const anotherElement = React.createElement(
  'a', 
  {
    href: 'https://www.google.com', 
    target: '_blank'
  },
 'Click me to visit google',
  anotherUser
)
//any variable that is passed inside a curly braces is always inserted in the end and is put direclty into the element object and we can put if else etc statements inside an object that is why we can not put a statement inside the curly braces that will be computed and only evaluated expressions are allowed

const anotherElement2 = (
  <a href="https://www.google.com" target="_blank">Click me to visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // MyApp()
  //anotherElement
  // anotherElement2
  <>
    <App />
  </>
)

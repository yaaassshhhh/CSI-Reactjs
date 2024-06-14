import React , {useState,useContext}from 'react'
import UserContext from '../context/UserContext';
function Login() {
    const [userName , setUserName] = useState('')
    const [password , setpassword] = useState('')
    const {setUser} = useContext(UserContext);
    //now we will send/set the data in our global store that is userContextProvider
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName,password})
    }

    const handleChange = (e) => {
        if(e.target.type === 'text'){
            setUserName(e.target.value)
        }
        else{
            setpassword(e.target.value)
        }
    }
  return (
    <div>
        <h2>
            Login
        </h2>
        <input type='text' placeholder='username' value={userName} onChange={handleChange}/>
        <input type='password' placeholder='password' value={password} onChange={handleChange}/>
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login
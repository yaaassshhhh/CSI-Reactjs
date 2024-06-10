import { useState, useCallback ,useEffect,useRef} from 'react'


function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz';
    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    } 
    setPassword(pass);
  }, [length, numAllowed, charAllowed,setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed,passwordGenerator]);

  const copyPasswordtoClipboard = () => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, length+1);
    window.navigator.clipboard.writeText(password);
  }
  const passRef = useRef(null);

  const [isClicked,setIsClicked] = useState(false);

  const buttonStyle = {
    transition : "trandform 0.2s",
    transform : isClicked? "scale(0.9)" : "scale(1)"
  }
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-red-500 bg-gray-700'>
      <h1 className='text-white text-center my-3 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          style={
            buttonStyle
          }
          onMouseDown={()=>setIsClicked(true)}
          onMouseUp={()=>setIsClicked(false)}
          onMouseLeave={()=>setIsClicked(false)}
          onClick={copyPasswordtoClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' 
            min ={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> setLength(e.target.value)}  
            />
            <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' 
            defaultChecked={numAllowed}
            id='numInput'
            className='cursor-pointer'
            onChange={()=> setNumAllowed((prev)=>!prev)}  
            />
            <label htmlFor='numInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' 
            defaultChecked={charAllowed}
            id='charInput'
            className='cursor-pointer'
            onChange={()=> setCharAllowed((prev)=>!prev) }  
            />
            <label htmlFor='charInput'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

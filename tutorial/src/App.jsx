import Chai from "./Chai.jsx"




export default function App() {
    const name = 'Chai';
    return <>
        <h1>Hello World  {name}</h1>
        <Chai />
    </>
};
//the curly braces are use for the final evaluated value 
//we can not put a statement inside the curly braces that will be computed 
//the comptation should be done the part above return statement and then the final value should be put inside the curly braces
//Vraiables are injected when the whole Dom tree has been created
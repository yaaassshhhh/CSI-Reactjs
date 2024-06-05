//4-working of our customRenderer function
function customRenderer(reactElement, container) {
//5-first we will create our domElement that we want to insert in the container
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.children;
// domElement.setAttribute('href', reactElement.props.href);
// domElement.setAttribute('target', reactElement.props.target);
for (const key in reactElement.props){
    domElement.setAttribute(key, reactElement.props[key]);
}
container.appendChild(domElement);
}
//1-here we will create our own react library
//that is how does react view the elements that we return in a function

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    children : 'Click me to visit google'
}
//2-in the code above we have created a customReact element defined by our own specified rules 
//now we need a method that will render it that is convert this customReact element to a real DOM element by injecting it into the root element;


// window.onload = function() {
    const mainContainer = document.querySelector('#root');
    customRenderer(reactElement, mainContainer);
// }
//3-the customRenderer is a function that expects two argumentsthe customReact element (or just an element) we want to render and where we want to render it in the dom;

//the jsx syntax that we write in our react code is converted to the react element by the react library and then it is rendered by the reactDom library
//the jsx component that we create is nothing other than a function that returns a react element object to the reactDom library
//the jsx is converted into an abject just like we have creatd above and then it is rendered by the reactDom library as proper HTMl
//we can execute a jsx component as JSX() isntead of <JSX /> since <JSX /> is function only but due to convection we follow the <JSX /> syntax and not JSX() syntax. Just make sure that the JSX() is executed independently in the render method of the reactDom library and not inside a JSx fargment or a component otherwise the reactDOM will expect a JSX syntax and not a function syntax
//we can even execute out custom ReactElement directly as a component without using the JSX syntax since behind the scene the JSX syntax which is lso a function only is converted into a *react element object* but the custom ReactElement object must follow the rules of the given reactDOM render method
//https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js
//here is how the createreactElement method is defined in the react library
//so.... just specifying the object syntax that is reactElement should also render the given element as a component
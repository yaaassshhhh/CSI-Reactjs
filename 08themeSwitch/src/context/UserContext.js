import React from "react";

const UserContext  = React.createContext();

export default UserContext;

//step - 1 create a context in context/userContext.js
//step - 2 create a provider in coext/userContextProvider.jsx
//step - 3 wrap the children with the UserContext.provider in userContextProvider.jsx
//step - 4 we need to pass a value/variable that we are going to pass through the provider in userContextProvider.jsx and it will be passed as a prop to the provider
//now the setup is complete
//step - 5 now we can use the context in any component by importing the context and using the useContext hook for example refer to Login.jsx and Profile.jsx
//we will use the useContext hook and will pass that context in it which has the value that we want to use in the component and on the left hand side we get a hold of that value for instance : const {user,setUser} = useContext(UserContext);
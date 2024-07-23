import  {createContext, ReactNode, useContext, useState} from "react";

const stateContext = createContext<any>(null);

// const initialState = {}

const navItems = [
    {
        title : "Liked Songs",
        slug : "/likedsongs",
    },
]

const addPlaylist = ({name}:{name : string}) => {
    navItems.push({
        title : name,
        slug : `/${name}`,
    })
}

export const ContextProvider =  ({children  } : {children : ReactNode} )=> {
    const [activeMenu , setActiveMenu] = useState(true);
    return (
        <stateContext.Provider value={{activeMenu , setActiveMenu , navItems , addPlaylist}}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext =  () => useContext(stateContext);
import React,{createContext, useState} from "react";

const AppContext = createContext({})

export const AppContextProvider = ({children}) => {
    const [user, setUserData] = useState({isLogin:false})
    return (
        <AppContext.Provider value={{user,setUserData}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext


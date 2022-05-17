import React,{createContext, useState} from "react";

const AppContext = createContext({})

export const AppContextProvider = ({children}) => {
    const [user, setUserData] = useState({
        isLogin:false,
        user:{},
        package:{
            name:'VIP',
            price:'590',
            periodOfUse:'3',
            exp:'30/12/2021'
        }
    })
    return (
        <AppContext.Provider value={{user,setUserData}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext


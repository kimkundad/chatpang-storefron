import React,{createContext, useState} from "react";

const AppContext = createContext({})

export const AppContextProvider = ({children}) => {
    const [user, setUserData] = useState({
        isLogin:false,
        user:{},
        accessToken:'',
        facebookUserId:'',
        order:{},
        orders:{},
        orderHistory:[],
        package:[],
        selectedpackage:null,
        purchases:[],
        pages:[],
        pagesActive:[],
        selectedPage:null,
        userId: ''
    })
    return (
        <AppContext.Provider value={{user,setUserData}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext


import React, { useContext } from "react";
import AppContext from "../context/AppContextProvider";

const useUser = () =>{
    return useContext(AppContext)
}

export default useUser;
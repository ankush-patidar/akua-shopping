import all_product from "../Components/Assets/all_product";
import { context } from "./Context";
import React from 'react'
import { userLoginContext } from "./Context";
import { useState } from "react";
import { cartItemContext } from "./Context";
function ContextProvider({ children }) {
    const contextValue = { all_product };
    const [userLoginInfo, setUserLoginInfo] = useState(null)
    const [addToCart, setAddTocart] = useState([]);
    return (
        <context.Provider value={contextValue}>
            <userLoginContext.Provider value={{ userLoginInfo, setUserLoginInfo }}>
                <cartItemContext.Provider value={{addToCart,setAddTocart}}>
                    {children}
                </cartItemContext.Provider>
            </userLoginContext.Provider>
        </context.Provider>
    )
}

export default ContextProvider
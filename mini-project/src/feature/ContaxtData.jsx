import React, { createContext, useState } from 'react'

export const DataContaxt = createContext()
const ContaxtData = ({ children }) => {
    let [cart , setCart]=useState([])
    let [total,setTotal]=useState(0)
    return (
        <DataContaxt.Provider value={{cart,total}}>
            {children}
        </DataContaxt.Provider>
    )
}

export default ContaxtData

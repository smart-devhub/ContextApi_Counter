import React,{createContext, useState} from 'react'

export const CounterContext=createContext()



const CounterContextProvider=props=>{
    const [count,setcount]=useState(0)

      return(

        <CounterContext.Provider value={[count,setcount]}>
           {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;


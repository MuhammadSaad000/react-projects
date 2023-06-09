import React, {createContext, useReducer} from 'react'
import AppReducer from "./AppReducer"

// Initial State

const initialState = {
    transactions : [
        {id: 1 , text : "Flower" , amount : -20},
        {id: 2 , text : "Salary" , amount : 400},
        {id: 3 , text : "Book" , amount : -10},
        {id: 4 , text : "Camera" , amount : 150},
    ]
}


// create context object
// This context object will hold the data that you want to share across your application.
export const GlobalContext = createContext(initialState);


// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({
            type : "DELETE_TRANSACTION",
            payload : id
        })
    }


    const addTransaction = (transaction) => {
        dispatch({
            type : "ADD_TRANSACTION",
            payload : transaction
        })
    }


    return (<GlobalContext.Provider value={{transactions : state.transactions , deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>);
}
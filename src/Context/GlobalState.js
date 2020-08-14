import React ,{useContext , useReducer, createContext} from 'react';
import Appreducer from './Appreducer';
//Initial State
const initialState = {
    transactions : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Appreducer , initialState);

    function deleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        });
    }
    function AddTransaction(transaction){
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        });
    }

    return ( <GlobalContext.Provider value = {{
        transactions : state.transactions,
        deleteTransaction,
        AddTransaction
    }}>
        {children}
    </GlobalContext.Provider> );
};
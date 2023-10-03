import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

const initialState = {
    user: null
}

const reducer = (state, action) => {
    if(action.type === "LOGIN") {
        return {
            user: action.payload,
        }
    }
    if(action.type === "LOGOUT") {
        return {
            user: null,
        }
    }
}

export const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        const user = localStorage.getItem("user")

        if(user) {
            dispatch({type: "LOGIN", payload: user})
        }
    },[])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}


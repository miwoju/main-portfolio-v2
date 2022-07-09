import React, { createContext, useReducer, useContext } from "react";

//Define Conext
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

//Reducer
const globalReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_MODAL": {
            return {
                ...state,
                isModalActive: action.payload,
            };
        }
        // case "CURSOR_TYPE": {
        //     return {
        //         ...state,
        //         cursorType: action.cursorType,
        //     };
        // }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const initialState = {
    isModalActive: "Genshin Wish Simulator",
};

// {
//     currentTheme:
//         window.localStorage.getItem("theme") == null
//             ? "dark"
//             : window.localStorage.getItem("theme"),
//     cursorType: false,
//     cursorStyles: ["pointer", "hovered", "locked", "white"],
// }

//Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    );
};

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);

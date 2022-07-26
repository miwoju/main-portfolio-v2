import React, { createContext, useReducer, useContext } from "react";
import genshinImg1 from "../../assets/images/genshin-img1.png";
import { projectsList } from "../../assets/data/projectsList";

//Define Conext
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const initialState = {
    isModalActive: false,
    projectsList: projectsList,
};

//Reducer
const globalReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_MODAL": {
            return {
                ...state,
                isModalActive: action.payload,
            };
        }
        case "ADD_NOTE": {
            return {
                ...state,
                projectsList: [...state.projectsList, action.payload],
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

import React, { createContext, useReducer, useContext } from "react";
import genshinImg1 from "../../assets/images/genshin-img1.png";

//Define Conext
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const LIST_OF_PROJECTS = [
    {
        title: "Genshin Wish Simulator",
        // bgColor: "#fd5b78",
        bgColor: "#f7d6e0",
        href: "https://ty4coffee.thekima.com/",
        content: "Developed in Typescript under Gatsbyjs.",
        github: "https://github.com/miwoju/genshin-wish-simulator-gatsby",
        projectImg: genshinImg1,
        hasContent: true,
    },
    {
        title: "Styled-Components Snippets Extension",
        // bgColor: "#fd5b78",
        bgColor: "#fcf6bd",
        href: "https://github.com/miwoju/styled-components-snippets",
        content:
            "Coded snippets syntax that I still personally use to this day.",
        github: "https://github.com/miwoju/styled-components-snippets",
        hasContent: false,
    },
    {
        title: "GG.ez Player Stats Tracker",
        // bgColor: "#fd5b78",
        bgColor: "#e4c1f9",
        href: "https://ggez.thekima.com/",
        content: "League of Legends(Riot API) player stats tracker.",
        github: "https://github.com/miwoju/league-app-client",
        hasContent: false,
    },
    {
        title: "Mock Twitter Project",
        // bgColor: "#fd5b78",
        bgColor: "#a9def9",
        href: "https://mocksocial.thekima.com/",
        content:
            "Mock twitter app with authentication, sign ups and log ins, and comment post/delete/edits.",
        github: "https://github.com/miwoju/mock-twitter-client",
        hasContent: false,
    },
    {
        title: "TBA",
        // bgColor: "#fd5b78",
        bgColor: "#b2f7ef",
        // href: "https://github.com/miwoju/styled-components-snippets",
        content: "Many more coming soon!",
        github: "",
        hasContent: false,
    },
    // {
    //     title: "Genshin Wish Simulator",
    //     bgColor: "#00A1BE",
    //     href: "https://ty4coffee.thekima.com/",
    //     content:
    //         "Developed in Typescript under Gatsbyjs. Chinese is also supported. From animations to gacha logic to storage.",
    // },
    // {
    //     title: "Genshin Wish Simulator",
    //     bgColor: "#8A6FBC",
    //     href: "https://ty4coffee.thekima.com/",
    //     content:
    //         "Developed in Typescript under Gatsbyjs. Chinese is also supported. From animations to gacha logic to storage.",
    // },
];

const initialState = {
    isModalActive: false,
    projectsList: LIST_OF_PROJECTS,
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

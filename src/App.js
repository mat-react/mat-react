<<<<<<< HEAD
import React, {useEffect} from "react";
=======
import React, {useEffect} from 'react';

import './Styles/index.scss'
>>>>>>> new_theme

// redux 
import { useDispatch } from "react-redux";
import { toggleDarkMode, languageChagner } from "./Store/actions/appSettings";

<<<<<<< HEAD
import "./Styles/index.css";

import Layout from "./Layouts/Layout";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const darkMode = localStorage.getItem("darkMode");
        const lang = localStorage.getItem("lang");
        dispatch(toggleDarkMode(darkMode));
        dispatch(languageChagner(lang));
    }, [dispatch]);

    return (
        <>
            <Layout />
        </>
    );
}

export default App;
=======
import Layout from "./Layouts/Layout";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const appMode = localStorage.getItem("appMode");
        const lang = localStorage.getItem("lang");
        dispatch(toggleDarkMode(appMode));
        dispatch(languageChagner(lang));
    }, [dispatch]);

    // window.matchMedia('(prefers-color-scheme: dark)')
    //     .addEventListener('change',({ matches }) => {
    //     dispatch(toggleDarkMode("system"));
    // })


    return (
        <div className='relative overflow-x-hidden text-sm font-normal antialiased vertical full ltr'>
        
            <Layout />
        
        </div>
    );
}


export default App;
>>>>>>> new_theme

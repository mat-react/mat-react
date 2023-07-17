import React, {useEffect} from 'react';

import './Styles/index.scss'

// redux 
import { useDispatch } from "react-redux";
import { toggleDarkMode, languageChagner } from "./Store/actions/appSettings";

import Layout from "./Layouts/Layout";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const appMode = localStorage.getItem("appMode");
        const lang = localStorage.getItem("lang");
        const direction = localStorage.getItem("dir");
        dispatch(toggleDarkMode(appMode));
        dispatch(languageChagner({ln: lang, dir: direction}));
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
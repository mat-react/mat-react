import React, {useEffect} from 'react';

import './Styles/index.scss'

// redux 
import { useDispatch } from "react-redux";
import { toggleDarkMode, languageChagner } from "./Store/actions/appSettings";

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
    <div>
      
        <Layout />
      
    </div>
  );
}


export default App;
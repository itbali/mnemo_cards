import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from "./components/header/Header";
import {RoutesComponent} from "./components/routes/RoutesComponent";

function App() {
    return (
        <HashRouter>
            <Header/>
            <RoutesComponent/>
        </HashRouter>
    );
}

export default App;

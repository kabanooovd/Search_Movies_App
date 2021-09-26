import React from 'react';
import {MovieApp} from "./Components/MovieApp/MovieApp";
import s from './App.module.css'
import {SuperInput} from "./Components/SuperInput/SuperInput";

function App() {
    return (
        <div>
            <div className={s.SI_positionStyle}>
                <SuperInput/>
            </div>
            <div className={s.AppStyles}>
                <MovieApp/>
            </div>
        </div>
    );
}

export default App;














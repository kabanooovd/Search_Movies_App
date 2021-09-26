import React, {useEffect} from 'react';
import {MovieApp} from "./Components/MovieApp/MovieApp";
import s from './App.module.css'
import {SuperInput} from "./Components/SuperInput/SuperInput";
import {omdbApi} from "./dal/omdbApi";

function App() {


    // useEffect( () => {
    //     omdbApi.getMoviesData('war')
    //         .then(res => {
    //             console.log(res.data)
    //         })
    // }, [] )


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














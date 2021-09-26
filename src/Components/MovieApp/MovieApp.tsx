import React from "react";
import s from './MovieApp.module.css'
import {InfoColumn} from "../InfoBlock/InfoColumn";
import {Poster} from "../InfoBlock/Poster";

export function MovieApp() {
    return (
        <div className={s.InfoBlockWrapper}>
            <div className={s.InfoBlock}>
                <InfoColumn />
                <Poster />
            </div>


        </div>
    );
}
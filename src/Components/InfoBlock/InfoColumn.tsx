import React from "react";
import s from './InfoColumn.module.css'
import {useSelector} from "react-redux";
import {RootReducer_T} from "../../bll/store";
import {BaseReceivedDataType} from "../../bll/searchMovieReducer";

export const InfoColumn = () => {

    const ReceivedMoviesData = useSelector<RootReducer_T, BaseReceivedDataType>(state => state.moviesData)

    const { Actors, Awards, BoxOffice, Country, DVD, Director, Genre, Language, Plot, Production,
                    Released, Runtime, Title, Type, Website, Writer, Year, } = ReceivedMoviesData

    return(
        <div className={s.InfoColumnFrame}>
            <span>Movie Name: {Title}</span>
            <span>Year: {Year}</span>
            <span>Actors: {Actors}</span>
            <span>Director: {Director}</span>
            <span>Awards: {Awards}</span>
            <span>BoxOffice: {BoxOffice}</span>
            <span>Country: {Country}</span>
            <span>DVD: {DVD}</span>
            <span>Genre: {Genre}</span>
            <span>Language: {Language}</span>
            <span>Production: {Production}</span>
            <span>Released: {Released}</span>
            <span>Runtime: {Runtime}</span>
            <span>Type: {Type}</span>
            <span>Website: {Website}</span>
            <span>Writer: {Writer}</span>
            <span>Description: {Plot}</span>
        </div>
    )
}




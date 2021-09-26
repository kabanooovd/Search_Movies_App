import React from "react";
import s from "./Poster.module.css";
import {useSelector} from "react-redux";
import {RootReducer_T} from "../../bll/store";
import {BaseReceivedDataType, unRecognizedImage} from "../../bll/searchMovieReducer";

export const Poster = () => {

    const CurrentPoster = useSelector<RootReducer_T, BaseReceivedDataType>(state => state.moviesData).Poster

    return(
        <div className={s.PosterFrame}>

            <img src={CurrentPoster !== "N/A" ? CurrentPoster : unRecognizedImage}
                 className={s.Poster}
            />

        </div>
    )
}






import React from "react";
import s from "./Poster.module.css";

const unRecognizedImage = 'https://i1.wp.com/strategicfinancialpartners.com/wp-content/uploads/2019/10/Placeholder.png?resize=1200%2C1200&ssl=1'

export const Poster = () => {

    return(
        <div className={s.PosterFrame}>

            <img src={unRecognizedImage}
                 className={s.Poster}
            />

        </div>
    )
}






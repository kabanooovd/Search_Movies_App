import { Dispatch } from "redux"
import {omdbApi} from "../dal/omdbApi";


export const unRecognizedImage = 'https://i1.wp.com/strategicfinancialpartners.com/wp-content/uploads/2019/10/Placeholder.png?resize=1200%2C1200&ssl=1'



export type BaseReceivedDataType = {
    Actors: string
    Awards: string
    BoxOffice: string
    Country: string
    DVD: string
    Director: string
    Genre: string
    Language: string
    Plot: string
    Poster: string
    Production: string
    Released: string
    Runtime: string
    Title: string
    Type: string
    Website: string
    Writer: string
    Year: string
}


const initialState: BaseReceivedDataType = {
    Actors: "",
    Awards: "",
    BoxOffice: "",
    Country: "",
    DVD: "",
    Director: "",
    Genre: "",
    Language: "",
    Plot: "",
    Poster: unRecognizedImage,
    Production: "",
    Released: "",
    Runtime: "",
    Title: "",
    Type: "",
    Website: "",
    Writer: "",
    Year: "",
}


export type Actions_T = searchMovie_AC_T

export const searchMovieReducer = (state: BaseReceivedDataType = initialState, action: Actions_T): BaseReceivedDataType => {
    switch (action.type) {
        case 'SET-FOUND-DATA': {
            return {...state, ...action.moviesData}
        }
        default: return state
    }
}

type searchMovie_AC_T = ReturnType<typeof searchMovie_AC>
export const searchMovie_AC = (moviesData: BaseReceivedDataType) => {
    return {type: 'SET-FOUND-DATA', moviesData} as const
}


export const searchMovie_TC = (title: string) => (dispatch: Dispatch) => {
        omdbApi.getMoviesData(title)
            .then(res => {
                // console.log(res.data)
                dispatch(searchMovie_AC(res.data))
            })
}








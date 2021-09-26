import axios from "axios";

// http://www.omdbapi.com/?apikey=[yourkey]&
// fb8f1b40

const apiKet = 'fb8f1b40'

export const omdbApi = {
    getMoviesData(title: string) {
        return axios.get(`http://www.omdbapi.com/?apikey=${apiKet}&t=${title}`)
    }
}


// Actors: "Jet Li, Jason Statham, Nadine Velazquez"
// Awards: "1 nomination"
// BoxOffice: "$22,486,409"
// Country: "Canada, United States"
// DVD: "05 Jun 2007"
// Director: "Philip G. Atwell"
// Genre: "Action, Crime, Thriller"
// Language: "English, Mandarin, Japanese, Cantonese"
// Metascore: "36"
// Plot: "An FBI Agent seeks vengeance on a mysterious assassin known as \"Rogue\" who murdered his partner."
// Poster: "https://m.media-amazon.com/images/M/MV5BNTIwMjE2Mjc1MF5BMl5BanBnXkFtZTYwNzI0OTI3._V1_SX300.jpg"
// Production: "New Glory Productions"
// Rated: "R"
// Ratings: (2) [{…}, {…}]
// Released: "24 Aug 2007"
// Response: "True"
// Runtime: "103 min"
// Title: "War"
// Type: "movie"
// Website: "N/A"
// Writer: "Lee Anthony Smith, Gregory J. Bradley"
// Year: "2007"
// imdbID: "tt0499556"
// imdbRating: "6.2"
// imdbVotes: "88,446"





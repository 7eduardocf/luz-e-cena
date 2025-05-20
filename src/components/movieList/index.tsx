import type {Movie } from "../../types";
import CardMovie from "../cardMovie"
import styles from "./movieList.module.css"




interface MovieListProps{
    movies: Movie[]
}

function MovieList({ movies }: MovieListProps) {
    return (
        <ul className={styles.lista}>
            {movies.map((movie) => {
                return <CardMovie key={movie.id} {...movie} />
            })}
        </ul>
    )
}

export default MovieList

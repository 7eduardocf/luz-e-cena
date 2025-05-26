import { FaSearch } from "react-icons/fa"
import Botao from "../button"
import FieldSet from "../fieldSet"
import InputText from "../inputText"
import styles from "./movieSection.module.css"
import MovieList from "../movieList"
import useFetchMovies from "../../hooks/useFetchMovies"



function MovieSection() {
    
    const {movies, error, isLoading} = useFetchMovies()

    return (
        <main>
            <section className={styles.container}>
                <FieldSet variante="Secondary">
                    <InputText placeholder="Buscar filmes"/>
                    <Botao variant="icon">
                        <FaSearch/>
                    </Botao>
                </FieldSet>
                <h1 className={styles.titulo}>Em cartaz</h1>
                <MovieList movies={movies}/>
            </section>
        </main>
    )
}
export default MovieSection

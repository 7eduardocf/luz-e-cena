import { FaSearch } from "react-icons/fa"
import Botao from "../button"
import FieldSet from "../fieldSet"
import InputText from "../inputText"
import styles from "./movieSection.module.css"
import MovieList from "../movieList"
import useFetchMovies from "../../hooks/useFetchMovies"
import useFilterMovies from "../../hooks/useFilterMovies"



function MovieSection() {
    
    const {movies, error, isLoading} = useFetchMovies()
    const {searchTerm, handleSearch, setSearchTerm, filteredMovies} = useFilterMovies(movies)

    return (
        <main>
            <section className={styles.container}>
                <FieldSet variante="Secondary">
                    <InputText value={searchTerm} onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} placeholder="Buscar filmes"/>
                    <Botao variant="icon" onClick={handleSearch}>
                        <FaSearch/>
                    </Botao>
                </FieldSet>
                <h1 className={styles.titulo}>Em cartaz</h1>
                {isLoading && <p>Carregando filmes...</p>}
                {error && <p className={styles.error}>{error}</p>}
                <MovieList movies={filteredMovies}/>
            </section>
        </main>
    )
}
export default MovieSection

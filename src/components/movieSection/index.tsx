import { FaSearch } from "react-icons/fa"
import Botao from "../button"
import FieldSet from "../fieldSet"
import InputText from "../inputText"
import styles from "./movieSection.module.css"
import MovieList from "../movieList"
import type { Movie } from "../../types"

const movies: Movie[] = [
    {
        id: 1,
        src: "/Imagens/Cards filmes/Card - Amigos do bosque mágico.png",
        alt: "Imagem do filme Amanhecer",
        titulo: "Amanhecer",
        categoria: "2D",
        censura: "Livre",
        genero: "Romance",
        duracao: 90,
    },
    {
        id: 2,
        src: "/Imagens/Cards filmes/Card - Amigo da sombra.png",
        alt: "Imagem do filme Amigo da sombra",
        titulo: "Amigo da sombra",
        categoria: "2D",
        censura: "12 anos",
        genero: "Suspense",
        duracao: 110,
    },
    {
        id: 3,
        src: "/Imagens/Cards filmes/Card - Caminho para o abismo.png",
        alt: "Imagem do filme Amigo do bosque mágico",
        titulo: "Amigo do bosque mágico",
        categoria: "2D",
        censura: "Livre",
        genero: "Animação",
        duracao: 60,
    },
    {
        id: 4,
        src: "/Imagens/Cards filmes/Card - Desastres do Escritório.png",
        alt: "Imagem do filme Caminho para o abismo",
        titulo: "Caminho para o abismo",
        categoria: "2D",
        censura: "14 anos",
        genero: "Horror",
        duracao: 103,
    },
    {
        id: 5,
        src: "/Imagens/Cards filmes/Card - La Esperanza.png",
        alt: "Imagem do filme Desastres do Escritório",
        titulo: "Desastres do Escritório",
        categoria: "2D",
        censura: "Livre",
        genero: "Comédia",
        duracao: 85,
    },
    {
        id: 6,
        src: "/Imagens/Cards filmes/Card - Mestres do futuro.png",
        alt: "Imagem do filme Mestres do Futuro",
        titulo: "Mestres do Futuro",
        categoria: "2D",
        censura: "Livre",
        genero: "Documentário",
        duracao: 120,
    },
    {
        id: 7,
        src: "/Imagens/Cards filmes/Card - O nexus do tempo.png",
        alt: "Imagem do filme La Esperanza",
        titulo: "La Esperanza",
        categoria: "2D",
        censura: "12 anos",
        genero: "Drama",
        duracao: 98,
    }
];

function MovieSection() {
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

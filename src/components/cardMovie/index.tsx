import type { Movie } from "../../types"
import Tag from "../tag"
import styles from "./cardMovie.module.css"


function CardMovie(props: Movie) {

    const {titulo,src,alt,genero,categoria,duracao,censura} = props

    return (
        <li className={styles.card}>
            <img src={src} alt={alt} />
            <div className={styles.container}>
                <h3>{titulo}</h3>
                <div className={styles.informacoes}>
                    <div className={styles.linha1}>
                        <p>{genero}</p>
                        <Tag value={categoria}/>
                    </div>
                    <div className={styles.linha2}>
                        <p>{duracao}</p>
                        <Tag value={censura}/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CardMovie

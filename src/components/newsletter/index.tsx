import Botao from "../button"
import FieldSet from "../fieldSet"
import InputText from "../inputText"
import styles from "./newsletter.module.css"

function Newsletter() {
    return (
        <section className={styles.newsletter}>
            <h2 className={styles.titulo}>Inscreva-se para ganhar desconto!</h2>
            <form className={styles.form}>
                <FieldSet>
                    <InputText placeholder="Digite o seu melhor e-mail"/>
                </FieldSet>
                <Botao type="submit" variant="default">
                    Inscreva-se
                </Botao>
            </form>
        </section>
    )
}

export default Newsletter
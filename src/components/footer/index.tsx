import FooterInfo from "./footerInfo"
import FooterLogo from "./footerLogo"
import styles from "./footer.module.css"

function Footer() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape_informacoes}>
                <FooterLogo/>
                <FooterInfo/>
            </div>
        </footer>
    )
}

export default Footer

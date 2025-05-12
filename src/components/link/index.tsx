import styles from "./link.module.css"

function Link({children}:){
    return(
        <a href="" className={styles.link}>
            {children}
        </a>
    )
}
export default Link
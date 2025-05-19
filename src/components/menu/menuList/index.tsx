import styles from "./MenuList.module.css"

function MenuList({ children }: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <nav className={styles.navegacao}>
            <ul className={styles.navegacao}>
                {children}
            </ul>
        </nav>
    )
}

export default MenuList